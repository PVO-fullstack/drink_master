// import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import styles from './Button.module.scss';

// ###################################################

export const Button = ({
  children,
  variant,
  disabled = false,
  onClick = null,
  type = 'button',
  style = null,
  className = null,
}) => {
  return (
    <button
      type={type}
      className={clsx(styles.button, styles[variant], className)}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string, //
  // variant: PropTypes.oneOf(['accented', 'transparent', 'cancel', 'icon']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};
