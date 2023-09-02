// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchIngredients } from '../../../redux/preparation/operations';

import { FieldArray } from 'formik';

import { SectionTitle } from '../../Typography';
import { IngredientItem, Counter } from '..';

import style from './RecipeIngredientsFields.module.scss';

// ###################################################

export const RecipeIngredientsFields = ({ values }) => {
  //
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients())
      .unwrap()
      .catch((error) => console.log('error: ', error));
  }, [dispatch]);

  const length = values.ingredients.length;

  return (
    <FieldArray
      name="ingredients"
      render={(arrayHelpers) => (
        <div className={style.container}>
          {/*  */}
          <div className={style.titleAndCounter}>
            <SectionTitle>Ingredients</SectionTitle>

            <Counter length={length} arrayHelpers={arrayHelpers} />
          </div>

          <div className={style.ingredientsWrapper} role="group">
            {values.ingredients.map((item, index) => (
              <IngredientItem
                key={index}
                index={index}
                length={length}
                arrayHelpers={arrayHelpers}
              />
            ))}
          </div>
        </div>
      )}
    />
  );
};

RecipeIngredientsFields.propTypes = {
  values: PropTypes.object.isRequired,
};
