import PropTypes from 'prop-types';
import styles from './PageTitle.module.scss';

// ###################################################

export const PageTitle = ({ children, style = null }) => {
  return (
    <h1 className={styles.heading} style={style}>
      {children}
    </h1>
  );
};

PageTitle.propTypes = {
  children: PropTypes.string,
  style: PropTypes.object,
};
