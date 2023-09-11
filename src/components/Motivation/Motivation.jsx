import PropTypes from 'prop-types';

import { Button } from '..';
import { RemoveIcon } from '../icons';

import clsx from 'clsx';
import styles from './Motivation.module.scss';

// ###################################################

export const Motivation = ({ children, className = null, closeModal }) => {
  const handleClose = () => {
    closeModal();
  };

  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.blurred}>
        {children}
        <div>
          <Button
            variant="icon"
            className={styles.closeButton}
            onClick={handleClose}
          >
            <RemoveIcon width={20} height={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

Motivation.propTypes = {
  children: PropTypes.string.isRequired,
  bgPath: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  closeModal: PropTypes.func,
};
