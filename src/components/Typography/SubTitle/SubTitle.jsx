import PropTypes from 'prop-types';
import styles from './SubTitle.module.scss';

// ###################################################

export const SubTitle = ({ children, style = null }) => {
  return (
    <h3 className={styles.heading} style={style}>
      {children}
    </h3>
  );
};

SubTitle.propTypes = {
  children: PropTypes.string,
  style: PropTypes.object,
};
