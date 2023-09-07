// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Field } from 'formik';
import { SectionTitle } from '../../Typography/SectionTitle/SectionTitle';

import style from './RecipePreparationFields.module.scss';
import { FormikTextArea } from '../FormikTextArea/FormikTextArea';

// ####################################################

export const RecipePreparationFields = () => {
  return (
    <div className={style.container}>
      <SectionTitle>Recipe Preparation</SectionTitle>

      <FormikTextArea
        name="instructions"
        placeholder="Preparation directions"
      />
    </div>
  );
};
