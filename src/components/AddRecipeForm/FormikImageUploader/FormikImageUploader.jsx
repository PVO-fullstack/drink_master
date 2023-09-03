/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { useField } from 'formik';

import style from './FormikImageUploader.module.scss';

// ###################################################

export const FormikImageUploader = (props) => {
  //
  const { name, func } = props;
  const [field, meta] = useField(props);
  // console.log('event.target.files[0]: ', event.target.files[0]);

  const handler = (e) => func('imageOfRecipe', e.target.files[0]);

  return (
    <div className={style.wrapper}>
      <input
        type="file"
        accept="image/*"
        name={name}
        id={name}
        {...field}
        onChange={(e) => handler(e)}
      />

      {meta.touched && meta.error ? (
        <div className={style.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

FormikImageUploader.propTypes = {
  name: PropTypes.string,
};
