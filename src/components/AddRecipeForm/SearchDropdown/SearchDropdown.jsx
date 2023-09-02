/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { useField } from 'formik';
import Select from 'react-select';

import style from './SearchDropdown.module.scss';
import { makeStyles } from './styles';

// ###################################################

export const SearchDropdown = (props) => {
  const {
    name,
    label,
    data,
    hasFakeField = false,
    flexGrow = 0,
    // isSearchable = true,
  } = props;
  //
  //
  // eslint-disable-next-line no-unused-vars
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
  // console.log('menuHeight: ', menuHeight);

  const capitalizedName =
    props.name.charAt(0).toUpperCase() + props.name.slice(1);

  const styles = makeStyles(props);

  return (
    <div className={style.wrapper} style={{ flexGrow: flexGrow }}>
      <div
        className={hasFakeField ? style.fakeFieldWrapper : style.fieldWrapper}
      >
        <Select
          name={props.name}
          options={options}
          styles={styles}
          onChange={(selectedOption) => setFieldProps(selectedOption)}
          unstyled
          maxMenuHeight={menuHeight}
          {...props}
        />

        <label
          htmlFor={label || name}
          className={hasFakeField ? style.fakeFieldLabel : style.label}
        >
          {hasFakeField ? capitalizedName : label || name}
        </label>
      </div>

      {meta.touched && meta.error ? (
        <div className={style.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

SearchDropdown.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape),
  hasFakeField: PropTypes.bool,
  isSearchable: PropTypes.bool,
  flexGrow: PropTypes.number,
};
