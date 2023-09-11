import { Modal } from '../../Modal/Modal';
import { Motivation } from '../../Motivation/Motivation';
import style from './FirstRecipe.module.scss';
import PropTypes from 'prop-types';

export const FirstRecipe = ({ close }) => {
  return (
    <Modal>
      <Motivation closeModal={close} className={style.container}>
        Wow! You have added the first recipe to your favorites!
      </Motivation>
    </Modal>
  );
};

FirstRecipe.propTypes = {
  close: PropTypes.func,
};
