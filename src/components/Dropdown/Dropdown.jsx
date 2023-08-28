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
}) => {
  //
  const makeOptions = (arrayOfObjects) =>
    arrayOfObjects.map(({ name }) => ({ value: name, label: name }));

  const options = makeOptions(data);

  return (
    <Select
      components={{ IndicatorSeparator: null }}
      styles={reactSelectStyles(variant)}
      options={options}
      placeholder={placeHolder}
      isSearchable={isSearchable}
      name={name}
      onChange={onChange}
    />
  );
};

Dropdown.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  variant: PropTypes.oneOf(['drinks', 'addrecipe']),
  placeHolder: PropTypes.string,
  name: PropTypes.string,
  isSearchable: PropTypes.bool,
  onChange: PropTypes.func,
};

// ###############################################

const reactSelectStyles = (variant) => ({
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
    // width: 'auto',
    width: 'max-content',
    // minWidth: '100%',
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: '#161f37',
    borderRadius: 20,
    padding: variant === 'addrecipe' ? 14 : '14px 23px',
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
