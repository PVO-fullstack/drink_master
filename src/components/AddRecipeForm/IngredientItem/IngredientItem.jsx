// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIngredients } from '../../../redux/preparation/selectors';

import PropTypes from 'prop-types';

import { SearchDropdown } from '../SearchDropdown/SearchDropdown';
import { RemoveIcon } from '../../icons';

import sizes from '../../../constants/breakpoints';
import itemsBeforeScroll from '../../../constants/select';

import style from './IngredientItem.module.scss';

// ###################################################

export const IngredientItem = ({ index, length, onRemove }) => {
  //
  const unsortedIngredients = useSelector(selectIngredients);

  const ingredients = [...unsortedIngredients].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div className={style.item}>
      <div className={style.inputsWrapper}>
        <SearchDropdown
          name={`ingredients.${index}.title`}
          data={ingredients}
          style={ingredientStyleOverride}
          placeholder="Ingredient name"
          itemsBeforeScroll={itemsBeforeScroll}
        />

        <SearchDropdown
          name={`ingredients.${index}.measure`}
          data={measures}
          style={measureStyleOverride}
          placeholder="Measure"
          itemsBeforeScroll={itemsBeforeScroll}
        />
      </div>

      <button
        className={style.removeButton}
        type="button"
        onClick={onRemove}
        disabled={length === 1}
        aria-label="Remove ingredient"
      >
        <RemoveIcon width={20} height={20} />
      </button>
    </div>
  );
};

IngredientItem.propTypes = {
  index: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  onRemove: PropTypes.func,
};

// *********************************************

const makeMeasures = (length) => {
  const array = [];
  for (let index = 1; index < length; index++) {
    array.push({ name: `${index} cl` }, { name: `${index} oz` });
  }
  return array;
};

const measures = makeMeasures(10);

// *********************************************

const tablet = `@media screen and (min-width: ${sizes.tablet})`;
const desktop = `@media screen and (min-width: ${sizes.desktop})`;

const ingredientStyleOverride = {
  control: {
    padding: '16px 18px',
    [tablet]: { padding: '14px 24px' },
  },
  container: {
    minWidth: 101,
    [tablet]: { width: 316 },
    [desktop]: { width: 332 },
  },
};

const measureStyleOverride = {
  control: {
    padding: '16px 18px',
    [tablet]: { padding: '14px 24px' },
  },
  container: {
    minWidth: 101,
    [tablet]: { width: 150 },
  },
  menu: { maxWidth: 80, borderRadius: 15 },
};
