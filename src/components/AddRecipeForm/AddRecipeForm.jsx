/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
// import { useSelector, useDispatch } from 'react-redux';

import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';

import { FormikTextInput } from './FormikTextInput/FormikTextInput';

import style from './AddRecipeForm.module.scss';

import { FormikSelect } from './FormikSelect/FormikSelect';
import { ImageUploadBlock } from './ImageUploadBlock/ImageUploadBlock';
import { yupSchema } from './YupSchema';
import { FormikImageUploader } from './FormikImageUploader/FormikImageUploader';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIngredients,
  selectPreparation,
} from '../../redux/preparation/selectors';
import {
  fetchCategories,
  fetchGlasses,
  fetchIngredients,
} from '../../redux/preparation/operations';

// ###################################################

export const AddRecipeForm = () => {
  //
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients())
      .unwrap()
      .catch((e) => console.log('error: ', e));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategories())
      .unwrap()
      .catch((e) => console.log('error: ', e));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchGlasses())
      .unwrap()
      .catch((e) => console.log('error: ', e));
  }, [dispatch]);

  // ****************** Global State ********************
  const { ingredients, categories, glasses, isLoading, error, currentId } =
    useSelector(selectPreparation);

  // console.clear();
  // console.log('glasses: ', glasses);
  // console.log('categories: ', categories);

  // ****************** Component State ********************
  const [objectURL, setObjectURL] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [counterValue, setCounterValue] = useState(1);

  // ******************** Handlers *************************
  const incrementIngredients = (arrayHelpers) => {
    setCounterValue((state) => state + 1);
    arrayHelpers.push(ingredientInitialValues);
  };
  const decrementIngredients = (arrayHelpers) => {
    if (counterValue === 1) {
      throw new Error("Can't make a cocktail out of nothing");
    }
    setCounterValue((state) => state - 1);
    arrayHelpers.pop();
  };
  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile.size > 2000000) {
      alert('File too large');
      throw new Error('File too large');
    }
    setObjectURL(URL.createObjectURL(selectedFile));
    setSelectedFile(selectedFile);
  };
  const handleRemoveThumbnail = () => {
    URL.revokeObjectURL(objectURL);
    setObjectURL(null);
    setSelectedFile(null);
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    values.drinkThumb = selectedFile;
    let formData = new FormData();
    for (const key in values) {
      formData.append(key, values[key]);
    }
    // console.log('formData: ', formData);
    // alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
    // try {

    // } catch (error) {

    // } finally {setSubmitting(false);}
  };
  // ******************** End of handlers ******************

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={yupSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form className={style.form}>
          <ImageUploadBlock
            labelFor="drinkThumb" //must match FormikImageUploader
            imageURL={objectURL}
            removeHandler={handleRemoveThumbnail}
          />

          <input
            type="file"
            accept="image/*"
            name="drinkThumb"
            id="drinkThumb"
            onChange={handleImageUpload}
            // onChange={(e) => setFieldValue('drinkThumb', e.target.files[0])}
          />

          {/* <FormikImageUploader name="drinkThumb" func={setFieldValue} /> */}

          {/* RecipeDescriptionFields */}
          <div className={style.fieldsGroup}>
            <FormikTextInput name="drink" label="Drink title" />

            <FormikTextInput name="description" label="Description" />

            <FormikSelect
              name="category"
              label="Category"
              data={categories}
              variant={variant}
              placeHolder="Select a category"
              isSearchable={false}
            />

            <FormikSelect
              name="glass"
              label="Glass"
              data={glasses}
              variant={variant}
              placeHolder="Select glass type"
              isSearchable={false}
            />
          </div>

          <h3>Ingredients</h3>

          <FieldArray
            name="ingredients"
            render={(arrayHelpers) => (
              <div>
                {/* Button and counter */}
                <div className={style.counterWrapper}>
                  <button
                    type="button"
                    onClick={() => decrementIngredients(arrayHelpers)}
                  >
                    -
                  </button>
                  <div>{counterValue}</div>
                  <button
                    type="button"
                    onClick={() => incrementIngredients(arrayHelpers)}
                  >
                    +
                  </button>
                </div>

                {values.ingredients.map((item, index) => (
                  <div className={style.ingredientsItem} key={index}>
                    <label className={style.ingredientLabel}>
                      <Field name={`ingredients.${index}.title`} as="select">
                        <option value="">Select ingredient</option>
                        {ingredients.map(({ title, _id: id }) => (
                          <option key={id} value={title}>
                            {title}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        className={style.error}
                        name={`ingredients.${index}.title`}
                      />
                    </label>

                    <label className={style.ingredientLabel}>
                      <Field name={`ingredients.${index}.measure`} as="select">
                        <option value="">Select measure</option>
                        <option value="1 cl">1 cl</option>
                        <option value="2 cl">2 cl</option>
                      </Field>
                      <ErrorMessage name={`ingredients.${index}.measure`} />
                    </label>

                    <button
                      type="button"
                      onClick={() => {
                        values.ingredients.length > 1 &&
                          arrayHelpers.remove(index);
                      }}
                      disabled={values.ingredients.length === 1}
                    >
                      -
                    </button>
                  </div>
                ))}
              </div>
            )}
          />

          <h3>Recipe Preparation</h3>
          <>
            <label htmlFor="instructions">
              <Field
                name="instructions"
                as="textarea"
                placeholder="Enter the recipe"
              />
            </label>
          </>

          <button type="submit">Add</button>
        </Form>
      )}
    </Formik>
  );
};

// ####################################################

const variant = 'addrecipe';

const ingredientInitialValues = { title: '', measure: '' };

const initialValues = {
  drink: '',
  description: '',
  category: '',
  glass: '',
  ingredients: [ingredientInitialValues],
  instructions: [],
  drinkThumb: '',
};

const drinkTypes = ['Ordinary Drink', 'Cocktail'];
