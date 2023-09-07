// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Field } from 'formik';
import { SectionTitle } from '../../Typography/SectionTitle/SectionTitle';

import style from './RecipePreparationFields.module.scss';

// ####################################################

export const RecipePreparationFields = () => {
  return (
    <div className={style.container}>
      <SectionTitle>Recipe Preparation</SectionTitle>

      <label htmlFor="instructions">
        <Field name="instructions">
          {({ meta }) => {
            console.log('meta: ', meta);
            return (
              <>
                <textarea
                  className={style.instructions}
                  placeholder="Preparation directions"
                />

                {meta.touched && meta.error ? (
                  <div className={style.error}>{meta.error}</div>
                ) : null}
              </>
            );
          }}
        </Field>
      </label>
    </div>
  );
};
