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

  // ******************** Handlers *************************

  const convertTextAreaToArray = (string) => {
    const normalizedString = string.replace(/\r\n/g, '\n');
    return normalizedString.split('\n').filter((el) => el.trim());
  };

  const handleSubmit = async (values, { resetForm }) => {
    toast.success(`Submitting`);

    // if (typeof values.instructions === 'string') {
    //   values.instructions = convertTextAreaToArray(values.instructions);
    // }
    // let formData = new FormData();
    // for (const key in values) {
    //   formData.append(key, values[key]);
    // }

    // console.log('formData: ', formData);
    // alert(JSON.stringify(values, null, 2));

    // try {
    // axios.post('/own', formData);
    //   dispatch(addRecipe(formData)).then(
    //     toast.success(`Congratulations, your recipe has been added`)
    //   );
    // } catch (error) {
    //   toast.error(error.message);
    // } finally {
    // setSubmitting(false);
    // If onSubmit is async, then Formik will automatically set isSubmitting to false on your behalf once it has resolved
    // resetForm();

    // await dispatch(addRecipe(values))
    //   .then(toast.success(`Recipe has been added`))
    //   .catch((error) => toast.error(error.message));

    // setSubmitting(false);
    // If onSubmit is async, then Formik will automatically set isSubmitting to false on your behalf once it has resolved
    // resetForm();
  };

  // ******************** End of handlers ******************

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={yupSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <Form className={style.form}>
          <div className={style.wrapper}>
            <RecipeDescriptionFields setFieldValue={setFieldValue} />
            <RecipeIngredientsFields values={values} />
            <RecipePreparationFields />
          </div>

          <Button
            type="submit"
            variant="accented"
            // disabled={isSubmitting}
          >
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
