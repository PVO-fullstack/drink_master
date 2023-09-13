import { useSelector } from 'react-redux';
import { selectIngredients } from '../../../redux/preparation/selectors';

import PropTypes from 'prop-types';

import { SearchDropdown } from 'components';
import { RemoveIcon } from 'components/icons';

import sizes from 'src/constants/breakpoints';
import itemsBeforeScroll from 'src/constants/select';

import style from './IngredientItem.module.scss';
import { FormikNumberInput } from '../FormikNumberInput/FormikNumberInput';

// ###################################################

export const IngredientItem = ({ index, length, onRemove }) => {
  //
  const unsortedIngredients = useSelector(selectIngredients);

  const ingredients = [...unsortedIngredients].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div className={style.item}>
      <div className={style.inputs}>
        <div className={style.ingredient}>
          <SearchDropdown
            name={`ingredients.${index}.title`}
            data={ingredients}
            style={ingredientStyleOverride}
            placeholder="Name"
            itemsBeforeScroll={itemsBeforeScroll}
            labelVisible={false}
            errorStyles={{ marginLeft: '1.2rem' }}
          />
        </div>

        <div className={style.quantity}>
          {/* <span className={style.stepUp}></span> */}

          <FormikNumberInput
            name={`ingredients.${index}.quantity`}
            min={0}
            step={0.5}
            placeholder="Qty"
            // className={style.formikNumber}
          />

          {/* <span className={style.stepDown}></span> */}
        </div>

        <div className={style.measure}>
          <SearchDropdown
            name={`ingredients.${index}.unit`}
            data={units}
            style={measureStyleOverride}
            placeholder="Unit"
            itemsBeforeScroll={itemsBeforeScroll}
            labelVisible={false}
            errorStyles={{ marginLeft: '1.2rem' }}
          />
        </div>

        {/* <div className={style.measureWrapper}>
          <SearchDropdown
            name={`ingredients.${index}.measure`}
            data={measures}
            style={measureStyleOverride}
            placeholder="Unit"
            itemsBeforeScroll={itemsBeforeScroll}
            labelVisible={false}
            errorStyles={{ marginLeft: '1.2rem' }}
          />
        </div> */}

        {/* <MeasureGroup name={`ingredients.${index}.measure`} data={measures} /> */}
      </div>

      {/* <div className={style.removeButtonCnt}> */}
      <button
        className={style.removeButton}
        type="button"
        onClick={onRemove}
        disabled={length === 1}
        aria-label="Remove ingredient"
      >
        <RemoveIcon width={20} height={20} />
      </button>
      {/* </div> */}
    </div>
  );
};

IngredientItem.propTypes = {
  index: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  onRemove: PropTypes.func,
};

// *********************************************

// const makeMeasures = (length) => {
//   const array = [];
//   for (let index = 1; index < length; index++) {
//     array.push({ name: `${index} cl` }, { name: `${index} oz` });
//   }
//   return array;
// };

// const measures = makeMeasures(10);

const unitNames = ['g', 'ml', 'oz', 'cl', 'tsp', 'cup', 'pinch', 'pc(s)'];
const units = unitNames.map((string) => ({ name: string }));

// *********************************************

const mobile = `@media screen and (min-width: ${sizes.mobile})`;
const tablet = `@media screen and (min-width: ${sizes.tablet})`;
const desktop = `@media screen and (min-width: ${sizes.desktop})`;

const ingredientStyleOverride = {
  control: {
    padding: '16px 18px',
    [tablet]: { padding: '14px 24px' },
  },
  container: {
    minWidth: 100,
    [tablet]: { width: 316 },
    [desktop]: { width: 332 },
    justifyContent: 'flex-end',
  },

  menu: { maxWidth: '70%' },
};

const measureStyleOverride = {
  control: {
    padding: '16px 18px',
    [mobile]: { maxWidth: 101 },
    [tablet]: { padding: '14px 24px', minWidth: 150 },
  },
  container: {
    minWidth: 101,
    [tablet]: { width: 150 },
  },
  menu: { maxWidth: 100, borderRadius: 15 },
};
