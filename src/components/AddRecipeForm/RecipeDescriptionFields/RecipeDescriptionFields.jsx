import { useSelector } from 'react-redux';
import { selectPreparation } from '../../../redux/preparation/selectors';

import PropTypes from 'prop-types';

import { FormikTextInput, FormikImageUploader } from '..';
import { SearchDropdown } from '../..';
import itemsBeforeScroll from '../../../constants/select';

import style from './RecipeDescriptionFields.module.scss';

// ###################################################

export const RecipeDescriptionFields = ({ setFieldValue }) => {
  //
  const prep = useSelector(selectPreparation);

  const glasses = [...prep.glasses].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const categories = [...prep.categories].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className={style.container}>
      <FormikImageUploader name="imageOfRecipe" setFieldValue={setFieldValue} />

      <div className={style.fieldsGroup}>
        <FormikTextInput name="drink" label="Drink title" />

        <FormikTextInput name="description" label="Description" />

        <SearchDropdown
          name="category"
          data={categories}
          style={fakeInputStyleOverride}
          placeholder={fakeInputPlaceholder}
          itemsBeforeScroll={itemsBeforeScroll}
          hasFakeField={true}
          isSearchable={false}
        />

        <SearchDropdown
          name="glass"
          data={glasses}
          style={fakeInputStyleOverride}
          placeholder={fakeInputPlaceholder}
          itemsBeforeScroll={itemsBeforeScroll}
          hasFakeField={true}
          isSearchable={false}
        />
      </div>
    </div>
  );
};

RecipeDescriptionFields.propTypes = {
  setFieldValue: PropTypes.func,
};

// ##########################################

const fakeInputStyleOverride = {
  control: {
    padding: 0,
    marginTop: -4,
    border: 'none',
    borderRadius: 'none',
    // backgroundColor: 'blueViolet',
    width: 'max-content',
  },

  menu: { width: 'max-content' },
  // container: { width: '100%' },
};

const fakeInputPlaceholder = 'Please select';
