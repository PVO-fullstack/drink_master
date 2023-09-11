import PropTypes from 'prop-types';
import { Motivation } from '../../Motivation/Motivation';
import style from './HundredDaysModal.module.scss';

export const HundredDaysModal = ({ close }) => {
  return (
    <Motivation closeModal={close} className={style.container}>
      Wow! You have been using the application for 100 days!
    </Motivation>
  );
};

HundredDaysModal.propTypes = {
  close: PropTypes.func,
};
