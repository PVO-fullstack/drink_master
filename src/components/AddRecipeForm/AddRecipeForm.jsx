/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';

import { FormikTextInput } from './FormikTextInput/FormikTextInput';

import style from './AddRecipeForm.module.scss';

import { FormikSelect } from './FormikSelect/FormikSelect';
import { yupSchema } from './YupSchema';
import { FormikImageUploader } from './FormikImageUploader/FormikImageUploader';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIngredients,
  selectPreparation,
} from '../../redux/preparation/selectors';
import { fetchIngredients } from '../../redux/preparation/operations';
import { RecipeDescriptionFields } from './RecipeDescriptionFields/RecipeDescriptionFields';

// ###################################################

export const AddRecipeForm = () => {
  //
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients())
      .unwrap()
      .catch((e) => console.log('error: ', e));
  }, [dispatch]);

  // ****************** Global State ********************
  const { ingredients } = useSelector(selectPreparation);

  // ****************** Component State ********************
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

  const handleSubmit = async (values, { setSubmitting }) => {
    // values.drinkThumb = selectedFile;
    let formData = new FormData();
    for (const key in values) {
      formData.append(key, values[key]);
    }
    console.log('formData: ', formData);
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
          {/*  */}
          <RecipeDescriptionFields setFieldValue={setFieldValue} />

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
