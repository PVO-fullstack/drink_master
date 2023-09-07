import PropTypes from 'prop-types';
import { useField } from 'formik';
import Select from 'react-select';

import style from './FakeDropdown.module.scss';
import { makeStyles } from './styles';

// ###################################################

export const FakeDropdown = (props) => {
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
  console.log('meta: ', meta);
  console.log('field: ', field);

  const { setValue, setTouched, setError } = helpers;
  const setFieldProps = (selectedOption) => {
    setValue(selectedOption.value);
    // setTouched(true);
    setError(undefined);
  };
  const makeOptions = (arrayOfObjects) =>
    arrayOfObjects.map(({ name }) => ({ value: name, label: name }));
  const options = makeOptions(data);
  const fontSize = 14;
  const maxMenuHeight = n ? n * fontSize + n * 8 + fontSize * 2 : null;
  // fontSize + itemsBeforeScroll * gap * vertical padding
  const capitalizedName =
    props.name.charAt(0).toUpperCase() + props.name.slice(1);
  const styles = makeStyles(props, meta);

  return (
    <div className={style.wrapper}>
      <div className={style.fakeFieldWrapper}>
        <Select
          name={name}
          options={options}
          styles={styles}
          onChange={setFieldProps}
          unstyled
          maxMenuHeight={maxMenuHeight}
          // {...field}
          // {...meta}
          // {...props}
        />

        {labelVisible && (
          <label htmlFor={name} className={style.fakeFieldLabel}>
            {capitalizedName}
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

FakeDropdown.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape),
  hasFakeField: PropTypes.bool,
  isSearchable: PropTypes.bool,
  labelVisible: PropTypes.bool,
  errorStyles: PropTypes.object,
  itemsBeforeScroll: PropTypes.number,
};
