/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';

import axios from 'axios';
import { toast } from 'react-hot-toast';

import { Formik, Form } from 'formik';
import { yupSchema } from './YupSchema';

import {
  RecipeDescriptionFields,
  RecipeIngredientsFields,
  RecipePreparationFields,
} from '.';

import { Button } from '../Button/Button';
import { addRecipe } from '../../redux/preparation/operations';

import style from './AddRecipeForm.module.scss';

// ###################################################

export const AddRecipeForm = () => {
  //
  const dispatch = useDispatch();

  const convertTextAreaToArray = (string) => {
    const normalizedString = string.replace(/\r\n/g, '\n');
    return normalizedString.split('\n').filter((el) => el.trim());
  };

  const handleSubmit = (values, formikBag) => {
    const { resetForm, setSubmitting } = formikBag;

    if (typeof values.instructions === 'string') {
      values.instructions = convertTextAreaToArray(values.instructions);
    }
    // console.log('values:', JSON.stringify(values, null, 2));

    // let formData = new FormData();

    // for (const key in values) {
    //   formData.append(key, values[key]);
    // }

    // console.log('formData: ', formData);

    dispatch(addRecipe(values))
      .then((data) => {
        if (data.error) throw new Error(data.payload);
        return toast.success('Contact has been deleted');
      })
      .catch((error) => {
        toast.error("We're sorry, but something went wrong");

        setTimeout(() => {
          toast.error(error.message);
        }, 1500);
      })
      .finally(() => {
        setSubmitting(false); // If onSubmit is async, then Formik will automatically set isSubmitting to false on your behalf once it has resolved
        resetForm();
      });

    setSubmitting(false);
  };

  // ******************** End of handlers ******************

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={yupSchema}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <Form className={style.form}>
          <div className={style.wrapper}>
            <RecipeDescriptionFields setFieldValue={setFieldValue} />
            <RecipeIngredientsFields items={values.ingredients} />
            <RecipePreparationFields values={values} />
          </div>

          <Button type="submit" variant="accented" disabled={isSubmitting}>
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
  imageOfRecipe: '',
};
