import PropTypes from 'prop-types';
import { useField } from 'formik';

import style from './FormikNumberInput.module.scss';
import clsx from 'clsx';

// ###################################################

export const FormikNumberInput = ({ label, ...props }) => {
  //
  const [field, meta] = useField(props);

  return (
    <div className={style.fieldWrapper}>
      <input
        type="number"
        // className={style.field}
        className={clsx(
          style.field,
          meta.touched && meta.error && style.fieldError
        )}
        {...field}
        {...props}
      />

      {label && (
        <label htmlFor={props.id || props.name} className={style.label}>
          {label}
        </label>
      )}

      {meta.touched && meta.error ? (
        <div className={style.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

FormikNumberInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
};
