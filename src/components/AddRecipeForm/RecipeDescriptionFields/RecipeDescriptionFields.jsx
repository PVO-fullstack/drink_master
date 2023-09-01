// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
  fetchCategories,
  fetchGlasses,
} from '../../../redux/preparation/operations';
import { selectPreparation } from '../../../redux/preparation/selectors';

import { ImageUploadBlock, FormikTextInput, SearchDropdown } from '..';
import style from './RecipeDescriptionFields.module.scss';

// ###################################################

export const RecipeDescriptionFields = ({ setFieldValue }) => {
  //
  // ****************** Global State ********************
  const { categories, glasses } = useSelector(selectPreparation);

  // ****************** Component State ********************
  const [objectURL, setObjectURL] = useState(null);

  // ******************** Lifecycle ************************
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories())
      .unwrap()
      .catch((e) => console.error('error: ', e));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchGlasses())
      .unwrap()
      .catch((e) => console.error('error: ', e));
  }, [dispatch]);

  // ******************** Handlers ************************

  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile.size > 2000000) {
      alert('File too large');
      throw new Error('File too large');
    }
    setObjectURL(URL.createObjectURL(selectedFile));
    setFieldValue('drinkThumb', selectedFile);
  };
  const handleRemoveThumbnail = () => {
    URL.revokeObjectURL(objectURL);
    setObjectURL(null);
  };

  // ****************** End of handlers *******************

  return (
    <div className={style.container}>
      <div className={style.addImageGroup}>
        <ImageUploadBlock
          labelFor="drinkThumb" //must match FormikImageUploader
          imageURL={objectURL}
          removeHandler={handleRemoveThumbnail}
        />

        <input
          type="file"
          accept="image/*"
          name="drinkThumb"
          id="drinkThumb"
          onChange={handleImageUpload}
          // required
        />
      </div>

      <div className={style.fieldsGroup}>
        <FormikTextInput name="drink" label="Drink title" />

        <FormikTextInput name="description" label="Description" />

        <SearchDropdown
          name="category"
          data={categories}
          style={fakeInputStyleOverride}
          placeholder={fakeInputPlaceholder}
          itemsBeforeScroll={6}
          hasFakeField={true}
          isSearchable={false}
        />

        <SearchDropdown
          name="glass"
          data={glasses}
          style={fakeInputStyleOverride}
          placeholder={fakeInputPlaceholder}
          itemsBeforeScroll={6}
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
