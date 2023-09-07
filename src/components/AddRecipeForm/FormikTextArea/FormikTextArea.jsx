import PropTypes from 'prop-types';
import { useField } from 'formik';

import style from './FormikTextArea.module.scss';

// ###################################################

export const FormikTextArea = ({ name, placeholder }) => {
  //
  const [field, meta] = useField(name);

  // const capitalizedName =
  //   props.name.charAt(0).toUpperCase() + props.name.slice(1);

  return (
    <div className={style.fieldWrapper}>
      <textarea
        name={name}
        id={name}
        className={style.instructions}
        placeholder={placeholder}
        {...field}
        // {...props}
      />

      {meta.touched && meta.error ? (
        <div className={style.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

FormikTextArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string,
};
