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

// ###################################################

export const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const convertTextAreaToArray = (string) => {
    const normalizedString = string.replace(/\r\n/g, '\n');
    return normalizedString.split('\n').filter((el) => el.trim());
  };

  const handleSubmit = (values, formikBag) => {
    const { resetForm, setSubmitting } = formikBag;

    if (typeof values.instructions === 'string') {
      values.instructions = convertTextAreaToArray(values.instructions);
    }

    values.ingredients = values.ingredients.map(
      ({ title, quantity, unit }) => ({
        title,
        measure: `${quantity} ${unit}`,
      })
    );

    // console.log('values:', JSON.stringify(values, null, 2));
    // resetForm();
    // setSubmitting(false);

    dispatch(addRecipe(values))
      .then((data) => {
        const { error, payload } = data;
        const { _id: id } = payload;
        if (error) throw new Error(payload);

        if (id) {
          toast.success(
            'Recipe has has been successfully added. Redirecting...'
          );
        }

        setTimeout(() => {
          navigate(`/recipes/${id}`);
        }, 1500);
      })
      .catch(() => {
        toast.error('Error adding a recipe. Please try again later');
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
        validationSchema={yupSchema}
        validateOnBlur={false}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, isSubmitting, isValid }) => (
          <Form className={style.form}>
            <div className={style.wrapper}>
              <RecipeDescriptionFields setFieldValue={setFieldValue} />

              <RecipeIngredientsFields items={values.ingredients} />

              <RecipePreparationFields values={values} />
            </div>

            <Button
              type="submit"
              variant="accented"
              disabled={isSubmitting || !isValid}
            >
              Add
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

// ####################################################

const initialValues = {
  drink: '',
  description: '',
  category: '',
  glass: '',
  ingredients: [{ title: '', quantity: '', unit: '' }],
  instructions: '',
  imageOfRecipe: '',
};
