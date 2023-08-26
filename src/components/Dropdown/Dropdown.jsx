// eslint-disable-next-line no-unused-vars
import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const selectStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    // borderColor: state.isFocused ? 'red' : 'grey',
    backgroundColor: '#161f37',
    color: '#f3f3f3',
    // borderRadius: 20,
    border: 'none',
  }),
  container: () => ({
    backgroundColor: '#161f37',
    color: '#f3f3f3',
  }),
  dropdownIndicator: (baseStyles, state) => {
    console.log('XXX state: ', state);
    return {
      ...baseStyles,
      color: '#f3f3f3',
      transform: state.selectProps.menuIsOpen ? 'rotate(0.5turn)' : 'unset',
    };
  },
  // group: (baseStyles) => ({}),
  // groupHeading: (baseStyles) => ({}),
  // indicatorsContainer: (baseStyles) => ({}),
  indicatorSeparator: () => ({}),
  // input: (baseStyles) => ({}),
  // loadingIndicator: (baseStyles) => ({}),
  // loadingMessage: (baseStyles) => ({}),
  // menu: (baseStyles) => ({}),
  menuList: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: '#161f37',
    color: '#f3f3f3',
  }),
  // menuPortal: (baseStyles) => ({}),
  // multiValue: (baseStyles) => ({}),
  // multiValueLabel: baseStyles() => ({}),
  // multiValueRemove: (baseStyles) => ({}),
  // noOptionsMessage: (baseStyles) => ({}),
  // option: (baseStyles) => ({}),
  // placeholder: (baseStyles) => ({ ...baseStyles, color: '#f3f3f3' }),
  singleValue: (baseStyles) => ({...baseStyles,color: '#f3f3f3' // }),
  // valueContainer: (baseStyles) => ({}),
};

export const Dropdown = ({ options }) => {
  return (
    <Select
      options={options}
      // unstyled
      styles={selectStyles}
    />
  );
};

Dropdown.propTypes = {
  options: PropTypes.array,
};
