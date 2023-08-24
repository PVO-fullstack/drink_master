// import React from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-hot-toast';

import clsx from 'clsx';
import style from './Button.module.scss';

// ###################################################

export const Button = ({ children, variant, disabled = false }) => {
  return (
    <button
      disabled={disabled}
      className={clsx(style.button, style[variant])}
      onClick={() => toast('Happy Independence Day!')}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
};
