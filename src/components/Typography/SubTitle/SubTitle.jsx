import PropTypes from 'prop-types';
import style from './SubTitle.module.scss';

// ###################################################

export const SubTitle = ({ children }) => {
  return <h3 className={style.heading}>{children}</h3>;
};

SubTitle.propTypes = {
  children: PropTypes.string,
};
