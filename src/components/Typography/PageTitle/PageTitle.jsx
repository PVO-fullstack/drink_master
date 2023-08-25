import PropTypes from 'prop-types';
import style from './PageTitle.module.scss';

// ###################################################

export const PageTitle = ({ children }) => {
  return <h1 className={style.heading}>{children}</h1>;
};

PageTitle.propTypes = {
  children: PropTypes.string,
};
