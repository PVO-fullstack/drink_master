import PropTypes from 'prop-types';
import styles from './Paragraph.module.scss';

// ###################################################

export const Paragraph = ({ children, style = null }) => {
  return (
    <p className={styles.heading} style={style}>
      {children}
    </p>
  );
};

Paragraph.propTypes = {
  children: PropTypes.string,
  style: PropTypes.object,
};
