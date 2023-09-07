import React from 'react';
import PropTypes from "prop-types";
import css from './Background.module.scss';

const BackgroundLayout = ({ children }) => {
  return (
    <div className={css.backdrop}>
      <div className={css.ellipse}>
        <div className={css.ellipse1}></div>
        <div className={css.ellipse2}></div>
        <div className={css.ellipse3}></div>
      </div>
      {children}
    </div>
  );
};

BackgroundLayout.propTypes = {
  children: PropTypes.node.isRequired,
};


export default BackgroundLayout;