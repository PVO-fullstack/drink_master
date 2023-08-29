/* eslint-disable no-unused-vars */
import React from 'react';

import { Formik, Form } from 'formik';
import { yupSchema } from './YupSchema';

import {
  RecipeDescriptionFields,
  RecipeIngredientsFields,
  RecipePreparationFields,
} from '.';

import style from './AddRecipeForm.module.scss';

// ###################################################

// const variant = 'addrecipe';

export const AddRecipeForm = () => {
  //
  const convertTextAreaToArray = (string) => {
    const normalizedString = string.replace(/\r\n/g, '\n');
    return normalizedString.split('\n').filter((el) => el.trim() !== '');
  };
  // ******************** Handlers *************************
  const handleSubmit = async (values, { setSubmitting }) => {
    values.instructions = convertTextAreaToArray(values.instructions);

    let formData = new FormData();
    for (const key in values) {
      formData.append(key, values[key]);
    }
    // console.log('formData: ', formData);
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
          <RecipeDescriptionFields setFieldValue={setFieldValue} />
          <RecipeIngredientsFields values={values} />
          <RecipePreparationFields />

          <button type="submit">Add</button>
        </Form>
      )}
    </Formik>
  );
};

// ####################################################

const initialValues = {
  drink: '',
  description: '',
  category: '',
  glass: '',
  ingredients: [{ title: '', measure: '' }],
  instructions: [],
  drinkThumb: '',
};
