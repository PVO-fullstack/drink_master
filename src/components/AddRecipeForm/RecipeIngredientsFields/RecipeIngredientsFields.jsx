// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchIngredients } from '../../../redux/preparation/operations';

import { FieldArray } from 'formik';

import style from './RecipeIngredientsFields.module.scss';
import { SectionTitle } from '../../Typography/SectionTitle/SectionTitle';
import { IngredientItem } from '../IngredientItem/IngredientItem';
import { PlusIcon, MinusIcon } from '../../icons';

// ###################################################

export const RecipeIngredientsFields = ({ values }) => {
  //
  const length = values.ingredients.length;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients())
      .unwrap()
      .catch((e) => console.log('error: ', e));
  }, [dispatch]);

  // ******************** Handlers *************************

  const addItem = (arrayHelpers) => {
    arrayHelpers.push({ title: '', measure: '' });
  };

  const removeItem = (arrayHelpers) => {
    if (length === 1) throw new Error("Can't make a cocktail out of nothing");
    arrayHelpers.pop();
  };
  // ******************** End of handlers ******************

  return (
    <FieldArray
      name="ingredients"
      render={(arrayHelpers) => (
        <div className={style.container}>
          <div className={style.headingAndButtonsWrapper}>
            <SectionTitle>Ingredients</SectionTitle>

            <div className={style.counterWrapper}>
              <button
                className={style.counterButton}
                type="button"
                onClick={() => removeItem(arrayHelpers)}
                disabled={length === 1}
              >
                <MinusIcon width={16} height={16} />
              </button>

              <div className={style.counter}>{length}</div>

              <button
                className={style.counterButton}
                type="button"
                onClick={() => addItem(arrayHelpers)}
              >
                <PlusIcon width={16} height={16} />
              </button>
            </div>
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
