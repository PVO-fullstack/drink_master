/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';

import Select from 'react-select';

import { Formik, Form, Field, useField } from 'formik';
import { string, array, object } from 'yup';

import { AddIcon, Dropdown } from '../../components';
import { FormikTextInput } from './FormikTextInput/FormikTextInput';

// import PropTypes from "prop-types";
import style from './AddRecipeForm.module.scss';

import glassesRaw from '../../data/glasses';

// ###################################################

// const SelectGlassType = () => <Dropdown options={glasses} />;

export const AddRecipeForm = () => {
  let drinkThumb = null;
  // console.log('glassesRaw: ', glassesRaw);

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={yupSchema}
      onSubmit={(values, { setSubmitting }) => {
        // let formData = new FormData();
        // formData.append('drink', values.drink);
        // for (let i = 0; i <= values.attachments.length; i += 1) {
        //   formData.append(`attachments[${i}]`, values.attachments[i]);
        // }
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      <Form className={style.form}>
        {/* <div className={style.image}>
            {drinkThumb && <img src={drinkThumb} alt="Drink image" />}
          </div> */}

        <Dropdown options={glasses} />

        <div className={style.labelWrapper}>
          <label htmlFor="drinkThumb">
            <AddIcon />
          </label>

          <p>Add image</p>
        </div>

        <Field
          type="file"
          id="drinkThumb"
          name="drinkThumb"
          accept="image/png, image/jpeg"
        />

        <div className={style.fieldsGroup}>
          <FormikTextInput name="drink" label="Drink title" />

          <FormikTextInput name="description" label="Description" />

          <label htmlFor="category">
            <Field name="category" as="select">
              <option value="">select category</option>
              <option value="ordinary">Ordinary Drink</option>
              <option value="cocktail">Cocktail</option>
            </Field>
          </label>

          <label htmlFor="glass">
            <select name="glass" id="glass">
              {/* <option value="">Select glass type</option> */}
              {glassesRaw.map((glass, index) => (
                <Fragment key={index}>
                  <option value={glass}>{glass}</option>
                </Fragment>
              ))}
            </select>

            {/* <Dropdown options={glasses} /> */}
            {/* <Field name="glass" as={SelectGlassType} /> */}
          </label>
        </div>

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
                </Field>
              </label>

              <label htmlFor="measure">
                <Field name="measure" as="select" className={style.measure}>
                  <option value="1">1 cl</option>
                  <option value="2">2 cl</option>
                </Field>
              </label>
            </div>

            <button type="button">Remove</button>
          </div>
        </div>

        <h3>Recipe Preparation</h3>
        <label htmlFor="instructions">
          <Field
            name="instructions"
            as="textarea"
            placeholder="Enter the recipe"
          />
        </label>

        <button type="submit">Add</button>
      </Form>
    </Formik>
  );
};

// ####################################################

const initialValues = {
  drink: '',
  description: '',
  category: '',
  glass: '',
  ingredients: [{ ingredient: '', measure: '' }],
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

const glasses = glassesRaw.map((glass) => {
  return { value: glass, label: glass };
});
// console.log('glasses: ', glasses);

const drinkTypes = [
  { value: 'Ordinary Drink', label: 'Ordinary Drink' },
  { value: 'Cocktail', label: 'Cocktail' },
];

// AddRecipeForm.propTypes = {
//     children: PropTypes.node,
//     variant: PropTypes.string,
//     disabled: PropTypes.bool,
//   };
