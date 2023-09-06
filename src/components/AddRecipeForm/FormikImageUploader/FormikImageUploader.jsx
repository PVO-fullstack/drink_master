import { useState } from 'react';
import PropTypes from 'prop-types';

import { ImageUploadBlock } from './ImageUploadBlock/ImageUploadBlock';
import { Field } from 'formik';

import style from './FormikImageUploader.module.scss';

// ###################################################

export const FormikImageUploader = ({ name, setFieldValue }) => {
  //
  const [objectURL, setObjectURL] = useState(null);

  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile.size > 2000000) {
      alert('File too large');
      throw new Error('File is too big');
    }
    setObjectURL(URL.createObjectURL(selectedFile));
    setFieldValue('imageOfRecipe', selectedFile);
  };
  const handleRemoveThumbnail = () => {
    URL.revokeObjectURL(objectURL);
    setObjectURL(null);
    setFieldValue('imageOfRecipe', '');
  };

  return (
    <div className={style.addImageGroup}>
      <ImageUploadBlock
        name={name}
        imageURL={objectURL}
        removeHandler={handleRemoveThumbnail}
      />

      <Field name={name}>
        {({ meta }) => (
          <>
            <input
              className={style.input}
              type="file"
              accept="image/*"
              id={name}
              onChange={handleImageUpload}
            />

            {meta.touched && meta.error ? (
              <div className={style.error}>{meta.error}</div>
            ) : null}
          </>
        )}
      </Field>
    </div>
  );
};

FormikImageUploader.propTypes = {
  name: PropTypes.string,
  setFieldValue: PropTypes.func,
};
