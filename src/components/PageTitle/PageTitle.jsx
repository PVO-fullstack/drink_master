import PropTypes from 'prop-types';
import style from './PageTitle.module.scss';

// ###################################################

const PageTitle = ({ children }) => {
  return <h1 className={style.pageTitle}>{children}</h1>;
};

PageTitle.propTypes = {
  children: PropTypes.string,
};

export default PageTitle;
