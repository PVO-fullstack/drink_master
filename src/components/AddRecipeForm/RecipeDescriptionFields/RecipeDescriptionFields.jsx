// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { selectPreparation } from '../../../redux/preparation/selectors';

import PropTypes from 'prop-types';

import { ImageUploadBlock, FormikTextInput, SearchDropdown } from '..';
import itemsBeforeScroll from '../../../constants/select';
import style from './RecipeDescriptionFields.module.scss';

// ###################################################

export const RecipeDescriptionFields = ({ setFieldValue }) => {
  //
  const aux = useSelector(selectPreparation);

  const glasses = [...aux.glasses].sort((a, b) => a.name.localeCompare(b.name));

  const categories = [...aux.categories].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const [objectURL, setObjectURL] = useState(null);

  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile.size > 2000000) {
      alert('File too large');
      throw new Error('File too large');
    }
    setObjectURL(URL.createObjectURL(selectedFile));
    setFieldValue('photoUrl', selectedFile);
  };
  const handleRemoveThumbnail = () => {
    URL.revokeObjectURL(objectURL);
    setObjectURL(null);
    setFieldValue('photoUrl', '');
  };

  return (
    <div className={style.container}>
      <div className={style.addImageGroup}>
        <ImageUploadBlock
          labelFor="photoUrl" //must match FormikImageUploader
          imageURL={objectURL}
          removeHandler={handleRemoveThumbnail}
        />

        <input
          type="file"
          accept="image/*"
          name="photoUrl"
          id="photoUrl"
          onChange={handleImageUpload}
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
