// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

// ###################################################

export const AddIcon = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
      style={{ stroke: 'currentcolor' }}
    >
      <path
        d="M14.5 5.83333V22.1667"
        // stroke="#161F37"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.33203 14H22.6654"
        // stroke="#161F37"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

AddIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
