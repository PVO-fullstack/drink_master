import PropTypes from 'prop-types';
import { useField } from 'formik';

import style from './FormikTextArea.module.scss';
import clsx from 'clsx';

// ###################################################

export const FormikTextArea = ({ name, label, ...props }) => {
  //
  const [field, meta] = useField(name);

  // const capitalizedName =
  //   props.name.charAt(0).toUpperCase() + props.name.slice(1);

  return (
    <div className={style.fieldWrapper}>
      <textarea
        name={name}
        id={name}
        // className={style.instructions}
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

FormikTextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
};
