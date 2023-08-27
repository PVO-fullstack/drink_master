/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';

import Select from 'react-select';
import { RiCloseCircleFill } from 'react-icons/ri';

import { Formik, Form, Field, useField, FieldArray } from 'formik';
import { string, array, object } from 'yup';

import { AddIcon, Dropdown } from '../../components';
import { FormikTextInput } from './FormikTextInput/FormikTextInput';

// import PropTypes from "prop-types";
import style from './AddRecipeForm.module.scss';

import glassesRaw from '../../data/glasses';
import { FormikSelect } from './FormikSelect/FormikSelect';

// ###################################################

export const AddRecipeForm = () => {
  // ******************** State ****************************
  // Image and thumbnail
  const [objectURL, setObjectURL] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  // Ingredient fields
  const [counterValue, setCounterValue] = useState(1);
  // const [ingredientFields, setIngredientFields] = useState([{}]);
  // ******************** End of state *********************

  // ******************** Handlers *************************
  // const addIngredientField = () => {
  //   const newField = { ingredient: '', measure: '' };
  //   ingredientFields.push(newField);
  //   setIngredientFields(ingredientFields);
  // };

  const incrementIngredients = (arrayHelpers) => {
    setCounterValue((state) => state + 1);
    // addIngredientField();
    arrayHelpers.push('');
  };
  const decrementIngredients = (arrayHelpers) => {
    if (counterValue === 1) {
      throw new Error("Can't make a cocktail out of nothing");
    }
    setCounterValue((state) => state - 1);
    // ingredientFields.pop();
    // setIngredientFields(ingredientFields);
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
  // ******************** End of handlers ******************

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={yupSchema}
      onSubmit={async (values, { setSubmitting }) => {
        console.log('Formik values: ', values);
        // let formData = new FormData();
        // formData.append('drinkThumb', myFileInput.files[0]);
        // formData.append('drink', true);
        // formData.append('description', 72);
        // formData.append('category', 72);
        // formData.append('glass', 72);
        // formData.append('ingredients', 72);
        // formData.append('instructions', 72);

        // for (let i = 0; i <= values.attachments.length; i += 1) {
        //   formData.append(`attachments[${i}]`, values.attachments[i]);
        // }
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
      render={({ values }) => (
        <Form className={style.form}>
          {/* Thumbnail and button */}
          <>
            {/* //#magenta */}
            <div className={style.thumbnail}>
              {/* ------------------------------------- */}
              {!objectURL ? (
                <div className={style.fileLabelGroup}>
                  {/* ------------------------------------- */}
                  <label
                    htmlFor="drinkThumb"
                    className={style.fileLabel}
                    aria-label="Upload a drink image"
                  >
                    <AddIcon />
                  </label>

                  <p className={style.fileLabelText}>Add image</p>
                </div>
              ) : (
                <>
                  <img
                    src={objectURL}
                    alt="Drink image preview"
                    className={style.image}
                  />
                  <button
                    className={style.closeButton}
                    aria-label="Remove image preview"
                    onClick={handleRemoveThumbnail}
                  >
                    <RiCloseCircleFill className={style.removeImageIcon} />
                  </button>
                </>
              )}
            </div>
            {/* //# */}
          </>

          <input
            type="file"
            id="drinkThumb"
            name="drinkThumb"
            accept="image/*"
            onChange={handleImageUpload}
          />

          {/* RecipeDescriptionFields */}
          <div className={style.fieldsGroup}>
            <FormikTextInput name="drink" label="Drink title" />

            <FormikTextInput name="description" label="Description" />

            <FormikSelect
              name="category"
              label="Category"
              data={drinkTypes}
              variant={variant}
              placeHolder="Select a category"
              isSearchable={false}
            />

            <FormikSelect
              name="glass"
              label="Glass"
              data={drinkTypes}
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

                {values.ingredients.map((friend, index) => (
                  <div key={index}>
                    <Field
                      name={`ingredients[${index}].ingredient`}
                      as="select"
                    >
                      <option value="">Select ingredient</option>
                      <option value="horilka">Horilka</option>
                      <option value="lemon">Lemon</option>
                    </Field>

                    <Field name={`ingredients[${index}].measure`} as="select">
                      <option value="">Select measure</option>
                      <option value="1 cl">1 cl</option>
                      <option value="2 cl">2 cl</option>
                    </Field>

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
    />
  );
};

// ####################################################

const variant = 'addrecipe';

const initialValues = {
  drink: '',
  description: '',
  category: '',
  glass: '',
  ingredients: [{}],
  instructions: [],
  drinkThumb: '',
};

const yupSchema = object({
  drink: string()
    .max(40, 'Title must be 40 characters or less')
    .required('Title is required'),
  description: string()
    .max(100, 'Must be 100 characters or less')
    .required('Description is required'),
  category: string().required('Please select a glass'),
  glass: string().required('Please select a glass'),
  ingredients: array()
    .of(
      object().shape({
        title: string(),
        measure: string(),
      })
    )
    .required('Please add at least one ingredient'),
  instructions: array()
    .of(string())
    .required('Please leave instructions on how to mix the ingredients'),
  drinkThumb: string().required('Please upload an image for your recipe'),
});

// AddRecipeForm.propTypes = {
//     children: PropTypes.node,
//     variant: PropTypes.string,
//     disabled: PropTypes.bool,
//   };

const drinkTypes = ['Ordinary Drink', 'Cocktail'];
