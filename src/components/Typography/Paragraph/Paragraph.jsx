import PropTypes from 'prop-types';
import style from './Paragraph.module.scss';

// ###################################################

export const Paragraph = ({ children }) => {
  return <p className={style.heading}>{children}</p>;
};

Paragraph.propTypes = {
  children: PropTypes.string,
};
