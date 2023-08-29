// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Field } from 'formik';

// import style from './RecipePreparationFields.module.scss';

// ####################################################

export const RecipePreparationFields = () => {
  return (
    <>
      <h3>Recipe Preparation</h3>

      <label htmlFor="instructions">
        <Field
          name="instructions"
          as="textarea"
          placeholder="Enter the recipe"
        />
      </label>
    </>
  );
};
