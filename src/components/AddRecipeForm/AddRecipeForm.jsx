import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
import { useState } from 'react';
import { Motivation } from '../Motivation/Motivation';

// ###################################################

export const AddRecipeForm = () => {
  // const [showModal, setShowModal] = useState({
  //     showModalFirstRecipe: false,
  //     showModalTenthRecipe: false,
  //   });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const closeModal = () => {
  //   setShowModal({
  //     showModalFirstRecipe: false,
  //     showModalTenthRecipe: false,
  //   });
  // };

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

    dispatch(addRecipe(values))
      .then((data) => {
        const { error, payload } = data;
        const { _id: id } = payload;
        if (error) throw new Error(payload);

        if (id) {
          console.log(payload.showModalMyRecipes);
          setShowModal(payload.showModalMyRecipes);
          toast.success(
            'Recipe has has been successfully added. Redirecting...'
          );
        }

        setTimeout(() => {
          navigate(`/recipes/${id}`);
        }, 1500);
      })
      .catch((error) => {
        toast.error("We're sorry, but something went wrong...");

        setTimeout(() => {
          toast.error(error.message);
        }, 1500);
      })
      .finally(() => {
        setSubmitting(false); // If onSubmit is async, then Formik will automatically set isSubmitting to false on your behalf once it has resolved
        resetForm();
      });
  };

  // ******************** End of handlers ******************

  return (
    <>
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
      {/* {showModal.showModalFirstRecipe && <FirstAddRecipe />} */}
    </>
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
  instructions: '',
  imageOfRecipe: '',
};
