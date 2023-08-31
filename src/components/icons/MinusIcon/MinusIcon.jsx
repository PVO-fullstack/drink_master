// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

// ###################################################

export const MinusIcon = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ stroke: 'currentcolor' }}
    >
      <g id="Minus">
        <path
          id="Vector"
          d="M2.5 8H13.5"
          // stroke="#F3F3F3"
          // strokeOpacity="0.3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

MinusIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
