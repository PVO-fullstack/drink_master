// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIngredients } from '../../../redux/preparation/selectors';

import PropTypes from 'prop-types';

import style from './IngredientItem.module.scss';
import { SearchDropdown } from '../SearchDropdown/SearchDropdown';
import { RemoveIcon } from '../../icons';

// ###################################################

export const IngredientItem = ({ index, length, arrayHelpers }) => {
  //
  const ingredients = useSelector(selectIngredients);

  return (
    <div className={style.item} key={index}>
      <div className={style.inputsWrapper}>
        <SearchDropdown
          name={`ingredients.${index}.title`}
          data={ingredients}
          style={{ control: { padding: '14px 24px' } }}
          placeholder="Ingredient"
          itemsBeforeScroll={6}
        />

        <SearchDropdown
          name={`ingredients.${index}.measure`}
          data={measures}
          style={{
            control: { padding: '14px 24px' },
            menu: { maxWidth: 80 },
          }}
          placeholder="Measure"
          itemsBeforeScroll={6}
        />
      </div>

      <button
        className={style.removeButton}
        type="button"
        onClick={() => length > 1 && arrayHelpers.remove(index)}
        disabled={length === 1}
      >
        <RemoveIcon width={20} height={20} />
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

// const measures = [{ name: '1 cl' } { name: '2 cl' }];

const makeMeasures = (length) => {
  const array = [];
  for (let index = 1; index < length; index++) {
    array.push({ name: `${index} cl` }, { name: `${index} oz` });
  }
  return array;
};

const measures = makeMeasures(10);
