/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { useField } from 'formik';
import Select from 'react-select';

import style from './SearchDropdown.module.scss';
import { makeStyles } from './styles';

// ###################################################

export const SearchDropdown = (props) => {
  const { name, label, data } = props;
  //
  const [field, meta, helpers] = useField(props);
  const { setValue, setTouched, setError } = helpers;

  const setFieldProps = (selectedOption) => {
    setValue(selectedOption.value);
    setTouched(true);
    setError(undefined);
  };

  const makeOptions = (arrayOfObjects) =>
    arrayOfObjects.map(({ name = null, title = null }) => ({
      value: name || title,
      label: name || title,
    }));
  const options = makeOptions(data);

  let menuHeight = null;
  if (props.itemsBeforeScroll) {
    const number = props.itemsBeforeScroll;

    menuHeight = number * 14 + number * 8 + 14 * 3;
  } // fontSize + itemsBeforeScroll * gap * vertical padding * 3
  console.log('menuHeight: ', menuHeight);

  const styles = makeStyles(props);

  return (
    <div className={style.fieldWrapper}>
      <Select
        name={props.name}
        options={options}
        styles={styles}
        onChange={(selectedOption) => setFieldProps(selectedOption)}
        unstyled
        maxMenuHeight={menuHeight}
        {...props}
      />

      <label htmlFor={label || name} className={style.label}>
        {label || name}
      </label>

      {meta.touched && meta.error ? (
        <div className={style.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

SearchDropdown.propTypes = {
  label: PropTypes.string,
};
