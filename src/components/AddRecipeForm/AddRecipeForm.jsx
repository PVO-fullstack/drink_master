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
import { RecipeIngredientsFields } from './RecipeIngredientsFields/RecipeIngredientsFields';

// ###################################################

export const AddRecipeForm = () => {
  // ******************** Handlers *************************
  const handleSubmit = async (values, { setSubmitting }) => {
    // values.drinkThumb = selectedFile;
    let formData = new FormData();
    for (const key in values) {
      formData.append(key, values[key]);
    }
    console.log('formData: ', formData);
    alert(JSON.stringify(values, null, 2));
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
          <RecipeIngredientsFields values={values} />

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

const initialValues = {
  drink: '',
  description: '',
  category: '',
  glass: '',
  ingredients: [{ title: '', measure: '' }],
  instructions: [],
  drinkThumb: '',
};
