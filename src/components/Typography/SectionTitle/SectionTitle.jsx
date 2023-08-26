import PropTypes from 'prop-types';
import styles from './SectionTitle.module.scss';

// ###################################################

export const SectionTitle = ({ children, style = null }) => {
  return (
    <h2 className={styles.heading} style={style}>
      {children}
    </h2>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.string,
  style: PropTypes.object,
};
