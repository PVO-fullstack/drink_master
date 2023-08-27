// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

import { RiCloseCircleFill } from 'react-icons/ri';
import { AddIcon } from '../../../components';

import style from './ImageUploadBlock.module.scss';

// ###################################################

export const ImageUploadBlock = ({ labelFor, imageURL, removeHandler }) => {
  return (
    <div className={style.thumbnail}>
      {!imageURL ? (
        <div className={style.fileLabelGroup}>
          <label
            htmlFor={labelFor}
            className={style.fileLabel}
            aria-label="Upload a drink image"
          >
            <AddIcon />
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
  imageURL: PropTypes.object || null,
  removeHandler: PropTypes.func,
  labelFor: PropTypes.string,
};
