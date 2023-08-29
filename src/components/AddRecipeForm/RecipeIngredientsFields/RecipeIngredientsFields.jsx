// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchIngredients } from '../../../redux/preparation/operations';
import { selectPreparation } from '../../../redux/preparation/selectors';
import { ErrorMessage, Field, FieldArray } from 'formik';

import style from './RecipeIngredientsFields.module.scss';
import { SectionTitle } from '../../Typography/SectionTitle/SectionTitle';

// ###################################################

export const RecipeIngredientsFields = ({ values }) => {
  //
  // ****************** Global State ********************
  const { ingredients } = useSelector(selectPreparation);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients())
      .unwrap()
      .catch((e) => console.log('error: ', e));
  }, [dispatch]);

  // ****************** Component State ********************
  const [counterValue, setCounterValue] = useState(1);

  // ******************** Handlers *************************
  const incrementIngredients = (arrayHelpers) => {
    setCounterValue((state) => state + 1);
    arrayHelpers.push({ title: '', measure: '' });
  };
  const decrementIngredients = (arrayHelpers) => {
    if (counterValue === 1) {
      throw new Error("Can't make a cocktail out of nothing");
    }
    setCounterValue((state) => state - 1);
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
                onClick={() => decrementIngredients(arrayHelpers)}
              >
                -
              </button>
              <div>{counterValue}</div>
              <button
                className={style.counterButton}
                type="button"
                onClick={() => incrementIngredients(arrayHelpers)}
              >
                +
              </button>
            </div>
          </div>

          <div className={style.ingredientsWrapper}>
            {values.ingredients.map((item, index) => (
              <div className={style.ingredientsItem} key={index}>
                <label className={style.ingredientLabel}>
                  <Field name={`ingredients.${index}.title`} as="select">
                    <option value="">Select ingredient</option>
                    {ingredients.map(({ title, _id: id }) => (
                      <option key={id} value={title}>
                        {title}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    className={style.error}
                    name={`ingredients.${index}.title`}
                  />
                </label>

                <label className={style.ingredientLabel}>
                  <Field name={`ingredients.${index}.measure`} as="select">
                    <option value="">Select measure</option>
                    <option value="1 cl">1 cl</option>
                    <option value="2 cl">2 cl</option>
                  </Field>
                  <ErrorMessage name={`ingredients.${index}.measure`} />
                </label>

                <button
                  className={style.removeIngredientButton}
                  type="button"
                  onClick={() => {
                    values.ingredients.length > 1 && arrayHelpers.remove(index);
                  }}
                  disabled={values.ingredients.length === 1}
                >
                  x
                </button>
              </div>
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
