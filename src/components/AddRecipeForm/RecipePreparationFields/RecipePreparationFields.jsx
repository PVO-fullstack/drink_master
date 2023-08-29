// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Field } from 'formik';
import { SectionTitle } from '../../Typography/SectionTitle/SectionTitle';

// import style from './RecipePreparationFields.module.scss';

// ####################################################

export const RecipePreparationFields = () => {
  return (
    // <div className={style.container}>
    <div>
      <SectionTitle>Recipe Preparation</SectionTitle>

      <label htmlFor="instructions">
        <Field
          name="instructions"
          as="textarea"
          placeholder="Enter the recipe"
        />
      </label>
    </div>
  );
};
