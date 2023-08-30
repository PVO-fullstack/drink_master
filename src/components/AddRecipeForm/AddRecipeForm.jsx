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
import { Button } from '../Button/Button';

// ###################################################

// const variant = 'addrecipe';

export const AddRecipeForm = () => {
  //
  // ******************** Handlers *************************

  const convertTextAreaToArray = (string) => {
    const normalizedString = string.replace(/\r\n/g, '\n');
    return normalizedString.split('\n').filter((el) => el.trim());
  };

  const handleSubmit = async (values, { resetForm }) => {
    if (typeof values.instructions === 'string') {
      values.instructions = convertTextAreaToArray(values.instructions);
    }
    let formData = new FormData();
    for (const key in values) {
      formData.append(key, values[key]);
    }
    // console.log('formData: ', formData);
    alert(JSON.stringify(values, null, 2));

    // try {
    // } catch (error) {
    // } finally {setSubmitting(false);}

    // If onSubmit is async, then Formik will automatically set isSubmitting to false on your behalf once it has resolved
    resetForm();
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
          <div className={style.wrapper}>
            <RecipeDescriptionFields setFieldValue={setFieldValue} />
            <RecipeIngredientsFields values={values} />
            <RecipePreparationFields />
          </div>

          <Button type="submit" variant="accented">
            Add
          </Button>
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
  ingredients: [
    { title: '', measure: '' },
    { title: '', measure: '' },
    { title: '', measure: '' },
  ],
  instructions: [],
  drinkThumb: '',
};
