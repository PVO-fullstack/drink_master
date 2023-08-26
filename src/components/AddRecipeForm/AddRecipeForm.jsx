// eslint-disable-next-line no-unused-vars
import React from 'react';
import Select from 'react-select';
// import PropTypes from "prop-types";
import { Formik, Form, Field } from 'formik';
import { string, array, object } from 'yup';

import style from './AddRecipeForm.module.scss';
import { AddIcon, Dropdown } from '../../components';
import glassesRaw from '../../data/glasses';

// ###################################################

// const drinks = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

const glasses = glassesRaw.map((glass) => {
  return { value: glass, label: glass };
});

const SelectGlassType = () => <Dropdown options={glasses} />;

const drinkTypes = [
  { value: 'Ordinary Drink', label: 'Ordinary Drink' },
  { value: 'Cocktail', label: 'Cocktail' },
];

export const AddRecipeForm = () => {
  let drinkThumb = null;
  return (
    <>
      <Formik
        initialValues={{
          drink: '',
          description: '',
          category: '',
          glass: '',
          ingredients: [{ ingredient: '', measure: '' }],
          instructions: [],
          drinkThumb: '',
        }}
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

          <label htmlFor="drink">
            <Field
              name="drink"
              className="field"
              placeholder="Enter drink title"
            />
          </label>

          <label htmlFor="description">
            <Field
              name="description"
              className="field"
              placeholder="Enter description"
            />
          </label>

          <label htmlFor="category">
            <Field name="category" as="select">
              <option value="">select category</option>
              <option value="ordinary">Ordinary Drink</option>
              <option value="cocktail">Cocktail</option>
            </Field>
          </label>

          <label htmlFor="glass">
            {/* <Field name="glass" as="select">
              <option value="">select glass</option>
              <option value="highball">Highball glass</option>
              <option value="cocktail">Cocktail glass</option>
            </Field> */}

            {/* <Dropdown options={glasses} /> */}
            <Field name="glass" as={SelectGlassType} />
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
    </>
  );
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
