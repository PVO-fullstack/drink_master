// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { FieldArray } from 'formik';

import { SectionTitle } from '../../Typography';
import { IngredientItem, Counter } from '..';

import style from './RecipeIngredientsFields.module.scss';

// ###################################################

export const RecipeIngredientsFields = ({ items }) => {
  //
  const length = items.length;

  return (
    <FieldArray // https://formik.org/docs/examples/field-arrays
      name="ingredients"
      validateOnChange={false} // https://formik.org/docs/api/fieldarray#validateonchange-boolean
      render={(
        { remove, pop, push } // arrayHelpers
      ) => (
        <div className={style.container}>
          <div className={style.titleAndCounter}>
            <SectionTitle>Ingredients</SectionTitle>

            <Counter length={length} pop={pop} push={push} />
          </div>

          <ul className={style.ingredientsWrapper}>
            {items.map((item, index) => (
              <li key={index}>
                <IngredientItem
                  index={index}
                  length={length}
                  onRemove={() => remove(index)}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    />
  );
};

RecipeIngredientsFields.propTypes = {
  items: PropTypes.array.isRequired,
};
