// eslint-disable-next-line no-unused-vars
import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

// ###############################################

export const Dropdown = ({
  data,
  variant = 'drinks',
  placeHolder = 'Please select',
  isSearchable = true,
  name,
  onChange,
  itemsBeforeScroll,
  ...props
}) => {
  //
  const makeOptions = (arrayOfObjects) =>
    arrayOfObjects.map(({ name }) => ({ value: name, label: name }));

  const options = makeOptions(data);
  const styles = makeStyles(variant);
  const menuHeight =
    itemsBeforeScroll * styles.container().fontSize +
    itemsBeforeScroll * styles.menuList().gap +
    styles.menuList().paddingTop * 3;

  return (
    <Select
      components={{ IndicatorSeparator: null }}
      styles={styles}
      options={options}
      placeholder={placeHolder}
      isSearchable={isSearchable}
      name={name}
      onChange={onChange}
      maxMenuHeight={menuHeight}
      {...props}
    />
  );
};

Dropdown.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  variant: PropTypes.oneOf(['drinks', 'addrecipe']),
  placeHolder: PropTypes.string,
  name: PropTypes.string.isRequired,
  isSearchable: PropTypes.bool,
  onChange: PropTypes.func,
  itemsBeforeScroll: PropTypes.number,
};

// ###############################################

const makeStyles = (variant) => ({
  control: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: variant === 'addrecipe' ? 'transparent' : '#161f37',
    borderRadius: 200,
    border: 'none',
    // width: 'auto',
    width: variant === 'addrecipe' ? 195 : 250,
    padding: variant === 'addrecipe' ? '0 14px' : '14px 24px',
  }),
  container: (baseStyles) => ({
    ...baseStyles,
    fontSize: variant === 'addrecipe' ? 14 : 17,
    lineHeight: '100%',
    width: 'auto',
  }),
  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    color: state.isFocused ? '#f3f3f3' : 'rgba(243, 243, 243, 0.40)',
    transform: state.selectProps.menuIsOpen ? 'rotate(0.5turn)' : 'unset',
    cursor: 'pointer',
  }),
  // indicatorsContainer: (baseStyles) => ({...baseStyles}),
  // indicatorSeparator: () => ({}),
  input: (baseStyles) => ({
    ...baseStyles,
    color: 'inherit',
    padding: 0,
  }),
  // loadingIndicator: (baseStyles) => ({...baseStyles}),
  // loadingMessage: (baseStyles) => ({...baseStyles}),
  menu: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: 'transparent',
    marginTop: 4,
    width: 'max-content',
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: '#161f37',
    borderRadius: 20,
    // padding: variant === 'addrecipe' ? 14 : '14px 23px',
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: variant === 'addrecipe' ? 14 : 23,
    paddingRight: variant === 'addrecipe' ? 14 : 23,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  }),
  // menuPortal: (baseStyles) => ({ ...baseStyles }),
  // multiValue: (baseStyles) => ({...baseStyles}),
  // multiValueLabel: baseStyles() => ({...baseStyles}),
  // multiValueRemove: (baseStyles) => ({...baseStyles}),
  // noOptionsMessage: (baseStyles) => ({...baseStyles}),
  option: (baseStyles, state) => ({
    ...baseStyles,
    padding: 0,
    color: state.isFocused ? '#f3f3f3' : 'rgba(243, 243, 243, 0.40)',
    backgroundColor: 'transparent',
    fontSize: variant === 'addrecipe' ? 14 : 17,
    lineHeight: variant === 'addrecipe' ? '128%' : '156%',
    // whiteSpace: 'nowrap',
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: '#f3f3f3',
    flexGrow: 1,
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    // backgroundColor: 'yellow',
    // paddingLeft: variant === 'addrecipe' ? 12 : 0,
    padding: 0,
  }),
});
