// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
  fetchCategories,
  fetchGlasses,
} from '../../../redux/preparation/operations';
import { selectPreparation } from '../../../redux/preparation/selectors';

import { ImageUploadBlock, FormikTextInput, FormikSelect } from '..';

import style from './RecipeDescriptionFields.module.scss';

// ###################################################

const variant = 'addrecipe';

// ###################################################

export const RecipeDescriptionFields = ({ setFieldValue }) => {
  // ****************** Global State ********************
  const { categories, glasses } = useSelector(selectPreparation);

  // ****************** Component State ********************
  const [objectURL, setObjectURL] = useState(null);

  // ******************** Lifecycle ************************
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories())
      .unwrap()
      .catch((e) => console.log('error: ', e));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchGlasses())
      .unwrap()
      .catch((e) => console.log('error: ', e));
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
  // ******************** End of handlers ******************

  return (
    <div>
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
        // onChange={(e) => setFieldValue('drinkThumb', e.target.files[0])}
      />

      <div className={style.fieldsGroup}>
        <FormikTextInput name="drink" label="Drink title" />

        <FormikTextInput name="description" label="Description" />

        <FormikSelect
          name="category"
          label="Category"
          data={categories}
          variant={variant}
          placeHolder="Select a category"
          isSearchable={false}
        />

        <FormikSelect
          name="glass"
          label="Glass"
          data={glasses}
          variant={variant}
          placeHolder="Select glass type"
          isSearchable={false}
        />
      </div>
    </div>
  );
};

RecipeDescriptionFields.propTypes = {
  setFieldValue: PropTypes.func,
};
