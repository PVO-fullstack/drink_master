import PropTypes from 'prop-types';

// ###################################################

export const RemoveIcon = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ stroke: 'currentcolor' }}
    >
      <g id="X">
        <path
          id="Vector"
          d="M15.625 4.375L4.375 15.625"
          // stroke="#F3F3F3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M15.625 15.625L4.375 4.375"
          // stroke="#F3F3F3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

RemoveIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
