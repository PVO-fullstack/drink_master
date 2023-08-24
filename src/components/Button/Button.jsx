// import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import style from './Button.module.scss';

// ###################################################

export const Button = ({
  children,
  variant,
  disabled = false,
  onClick = null,
  type = 'button',
}) => {
  return (
    <button
      disabled={disabled}
      className={clsx(style.button, style[variant])}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
