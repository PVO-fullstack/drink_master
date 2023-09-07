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
    labelVisible = true,
    errorStyles = null,
    itemsBeforeScroll: n,
  } = props;
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

  const fontSize = 14;
  const maxMenuHeight = n ? n * fontSize + n * 8 + fontSize * 2 : null;
  // fontSize + itemsBeforeScroll * gap * vertical padding

  const capitalizedName =
    props.name.charAt(0).toUpperCase() + props.name.slice(1);

  const styles = makeStyles(props, meta);

  const value = options.find((option) => option.value === field.value) || '';

  return (
    <div className={style.wrapper}>
      <div
        className={hasFakeField ? style.fakeFieldWrapper : style.fieldWrapper}
      >
        <Select
          name={props.name}
          options={options}
          styles={styles}
          onChange={setFieldProps}
          unstyled
          maxMenuHeight={maxMenuHeight}
          value={value}
          {...props}
        />

        {labelVisible && (
          <label
            htmlFor={label || name}
            className={hasFakeField ? style.fakeFieldLabel : style.label}
          >
            {hasFakeField ? capitalizedName : label || name}
          </label>
        )}
      </div>

      {meta.touched && meta.error ? (
        <div className={style.error} style={errorStyles}>
          {meta.error}
        </div>
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
  labelVisible: PropTypes.bool,
  errorStyles: PropTypes.object,
  itemsBeforeScroll: PropTypes.number,
};
