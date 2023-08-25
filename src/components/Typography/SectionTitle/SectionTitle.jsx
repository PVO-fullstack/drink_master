import PropTypes from 'prop-types';
import style from './SectionTitle.module.scss';

// ###################################################

export const SectionTitle = ({ children }) => {
  return <h2 className={style.heading}>{children}</h2>;
};

SectionTitle.propTypes = {
  children: PropTypes.string,
};
