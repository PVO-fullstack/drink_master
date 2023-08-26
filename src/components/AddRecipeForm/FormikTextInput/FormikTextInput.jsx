import PropTypes from 'prop-types';
import { useField } from 'formik';

import style from './FormikTextInput.module.scss';

// ###################################################

export const FormikTextInput = ({ label, ...props }) => {
  //   const [field, meta] = useField({ ...props, placeholder: label });
  const [field, meta] = useField(props);
  //   console.log('field: ', field);

  return (
    <div className={style.wrapper}>
      <input
        className={style.field}
        placeholder={label}
        {...field}
        {...props}
      />

      <label htmlFor={props.id || props.name} className={style.label}>
        {label}
      </label>

      {meta.touched && meta.error ? (
        <div className={style.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

FormikTextInput.propTypes = {
  // children: PropTypes.node,
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};
