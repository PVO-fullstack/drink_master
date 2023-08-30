// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIngredients } from '../../../redux/preparation/selectors';

import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';

import style from './IngredientItem.module.scss';

// ###################################################

export const IngredientItem = ({ index, length, arrayHelpers }) => {
  //
  const ingredients = useSelector(selectIngredients);

  return (
    <div className={style.item} key={index}>
      <div className={style.inputsWrapper}>
        <label className={style.label}>
          <Field name={`ingredients.${index}.title`} as="select">
            <option value="">Select ingredient</option>
            {ingredients.map(({ title, _id: id }) => (
              <option key={id} value={title}>
                {title}
              </option>
            ))}
          </Field>

          <ErrorMessage
            render={(msg) => <p className={style.error}>{msg}</p>}
            name={`ingredients.${index}.title`}
          />
        </label>

        <label className={style.label}>
          <Field name={`ingredients.${index}.measure`} as="select">
            <option value="">Select measure</option>
            <option value="1 cl">1 cl</option>
            <option value="2 cl">2 cl</option>
            <option value="2 cl">3 cl</option>
            <option value="2 cl">4 cl</option>
            <option value="2 cl">5 cl</option>
          </Field>

          <ErrorMessage
            render={(msg) => <p className={style.error}>{msg}</p>}
            name={`ingredients.${index}.measure`}
          />
        </label>
      </div>

      <button
        className={style.removeButton}
        type="button"
        onClick={() => length > 1 && arrayHelpers.remove(index)}
        disabled={length === 1}
      >
        x
      </button>
    </div>
  );
};

IngredientItem.propTypes = {
  index: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  arrayHelpers: PropTypes.object.isRequired,
  ingredients: PropTypes.array.isRequired,
};
