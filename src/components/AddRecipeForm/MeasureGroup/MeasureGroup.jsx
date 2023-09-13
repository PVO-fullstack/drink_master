import PropTypes from 'prop-types';
import { Field, useField } from 'formik';
import Select from 'react-select';

import sizes from '../../../constants/breakpoints';

import style from './MeasureGroup.module.scss';
import { useEffect, useState } from 'react';
// import { makeStyles } from './styles';

// ###################################################

export const MeasureGroup = (props) => {
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
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');

  const [field, meta, helpers] = useField(props);

  const { setValue, setTouched, setError } = helpers;

  useEffect(() => {
    //
    setValue(`${quantity} ${unit}`.trim());
    setTouched(true);
    setError(undefined);
  }, [quantity, unit, setError, setTouched, setValue]);

  const makeOptions = (arrayOfObjects) =>
    arrayOfObjects.map(({ name = null, title = null }) => ({
      value: name || title,
      label: name || title,
    }));
  const options = makeOptions(data);

  const fontSize = Window.innerWidth > sizes.mobile ? 17 : 14;
  const maxMenuHeight = n ? n * fontSize + n * 8 + fontSize * 3 : null;
  // fontSize + itemsBeforeScroll * gap * vertical padding

  const capitalizedName =
    props.name.charAt(0).toUpperCase() + props.name.slice(1);

  //   const styles = makeStyles(props, meta);

  const selectValue =
    options.find((option) => option.value === field.value) || '';

  return (
    <div className={style.wrapper}>
      <div
        className={hasFakeField ? style.fakeFieldWrapper : style.fieldWrapper}
      >
        <input
          type="number"
          name="quantity"
          id="quantity"
          onChange={(e) => setQuantity(e.target.valueAsNumber)}
        />

        <Select
          name={props.name}
          options={options}
          //   styles={styles}
          onChange={(selectedOption) => setUnit(selectedOption.value)}
          unstyled
          maxMenuHeight={maxMenuHeight}
          value={selectValue}
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

MeasureGroup.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape),
  hasFakeField: PropTypes.bool,
  isSearchable: PropTypes.bool,
  labelVisible: PropTypes.bool,
  errorStyles: PropTypes.object,
  itemsBeforeScroll: PropTypes.number,
};
