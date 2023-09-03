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

  // useEffect(() => {
  //   console.log('useEffect fired');
  //   console.log('items in useEffect', items);
  // }, [items]);

  const handleRemove = (arrayHelpers, index) => {
    // console.log('deleted item: ', arrayHelpers.remove(index));
    arrayHelpers.remove(index);
    console.log('items in onClick: ', arrayHelpers.form.values.ingredients);
  };

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

          <ul className={style.ingredientsWrapper}>
            {items.map((item, index) => (
              <li key={index}>
                <IngredientItem
                  index={index}
                  length={length}
                  // onClick={() => arrayHelpers.remove(index)}
                  onClick={() => handleRemove(arrayHelpers, index)}
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
