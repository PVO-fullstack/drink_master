import PropTypes from 'prop-types';
import { useField } from 'formik';

import { Dropdown } from '../../../components';

import style from './FormikSelect.module.scss';

// ###################################################

export const FormikSelect = ({ label, ...props }) => {
  //
  const [field, meta, helpers] = useField(props);
  const { setValue, setTouched, setError } = helpers;

  const setFieldProps = (selectedOption) => {
    setValue(selectedOption.value);
    setTouched(true);
    setError(undefined);
  };

  return (
    <div className={style.wrapper}>
      <Dropdown
        {...field}
        {...props}
        onChange={(selectedOption) => setFieldProps(selectedOption)}
        // menuShouldScrollIntoView={true}
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

FormikSelect.propTypes = {
  data: PropTypes.array,
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  variant: PropTypes.oneOf(['drinks', 'addrecipe']),
  placeHolder: PropTypes.string,
  isSearchable: PropTypes.bool,
};
