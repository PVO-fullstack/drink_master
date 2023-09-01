import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './SubTitle.module.scss';

// ###################################################

export const SubTitle = ({ children, style = null, className = null }) => {
  return (
    <h3 className={clsx(styles.heading, className)} style={style}>
      {children}
    </h3>
  );
};

SubTitle.propTypes = {
  children: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};
