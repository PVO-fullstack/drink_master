// import React from 'react'
// import PropTypes from "prop-types";
import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
import style from './AddRecipeForm.module.scss';

// ###################################################

export const AddRecipeForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          acceptedTerms: false, // added for our checkbox
          jobType: '', // added for our select
        }}
        // validationSchema={Yup.object({
        //   firstName: Yup.string()
        //     .max(15, 'Must be 15 characters or less')
        //     .required('Required'),
        //   lastName: Yup.string()
        //     .max(20, 'Must be 20 characters or less')
        //     .required('Required'),
        //   email: Yup.string()
        //     .email('Invalid email address')
        //     .required('Required'),
        //   acceptedTerms: Yup.boolean()
        //     .required('Required')
        //     .oneOf([true], 'You must accept the terms and conditions.'),
        //   jobType: Yup.string()
        //     .oneOf(
        //       ['designer', 'development', 'product', 'other'],
        //       'Invalid Job Type'
        //     )
        //     .required('Required'),
        // })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className={style.form}>
          {/* // */}
          <label htmlFor="ingredient">
            <Field
              name="title"
              className="field"
              placeholder="Enter recipe title"
            />
          </label>

          <label htmlFor="ingredient">
            <Field
              name="description"
              className="field"
              placeholder="Enter description"
            />
          </label>

          <label htmlFor="ingredient">
            <Field name="category" as="select" className="dropdown">
              <option value="ordinary">Ordinary Drink</option>
              <option value="cocktail">Cocktail</option>
            </Field>
          </label>

          <label htmlFor="ingredient">
            <Field name="glass" as="select" className="dropdown">
              <option value="highball">Highball glass</option>
              <option value="cocktail">Cocktail glass</option>
            </Field>
          </label>

          <h3>Ingredients</h3>

          <div className={style.counterWrapper}>
            <button type="button">-</button>
            <div>1</div>
            <button type="button">+</button>
          </div>

          <div className={style.groupWrapper}>
            <div className={style.itemWrapper}>
              <div className={style.item}>
                <label htmlFor="ingredient">
                  <Field
                    name="ingredient"
                    as="select"
                    className={style.ingredient}
                  >
                    <option value="horilka">Horilka</option>
                    <option value="lemon">Lemon</option>
                  </Field>{' '}
                </label>

                <label htmlFor="quantity">
                  <Field name="quantity" as="select" className={style.quantity}>
                    <option value="1">1 cl</option>
                    <option value="2">2 cl</option>
                  </Field>
                </label>
              </div>

              <button type="button">Remove</button>
            </div>
          </div>

          <h3>Recipe Preparation</h3>
          <Field
            name="message"
            as="textarea"
            className="form-textarea"
            placeholder="Enter the recipe"
          />

          <button type="submit">Add</button>
        </Form>
      </Formik>
    </>
  );
};

// AddRecipeForm.propTypes = {
//     children: PropTypes.node,
//     variant: PropTypes.string,
//     disabled: PropTypes.bool,
//   };
