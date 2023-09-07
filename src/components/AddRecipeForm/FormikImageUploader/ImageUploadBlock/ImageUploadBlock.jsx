// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

import { RiCloseCircleFill } from 'react-icons/ri';
import { AddIcon } from '../../../icons';

import style from './ImageUploadBlock.module.scss';

// ###################################################

export const ImageUploadBlock = ({ name, imageURL, removeHandler }) => {
  return (
    <div className={style.thumbnail}>
      {!imageURL ? (
        <div className={style.fileLabelGroup}>
          <label
            htmlFor={name}
            className={style.fileLabel}
            aria-label="Upload an image for your recipe"
          >
            <AddIcon width={29} height={28} />
          </label>

          <p className={style.fileLabelText}>Add image</p>
        </div>
      ) : (
        <>
          <img
            src={imageURL}
            alt="Drink image preview"
            className={style.image}
          />

          <button
            className={style.closeButton}
            aria-label="Remove image preview"
            onClick={removeHandler}
          >
            <RiCloseCircleFill className={style.removeImageIcon} />
          </button>
        </>
      )}
    </div>
  );
};

ImageUploadBlock.propTypes = {
  imageURL: PropTypes.string || null,
  removeHandler: PropTypes.func,
  name: PropTypes.string,
};
