import { Modal } from "../../Modal/Modal";
import { Motivation } from "../../Motivation/Motivation";
import style from "./FirstAddRecipe.module.scss";
import PropTypes from "prop-types";

export const FirstAddRecipe = ({ close }) => {
  return (
    <Modal>
      <Motivation closeModal={close} className={style.container}>
        Wow! You have added the first recipe to your favorites!
      </Motivation>
    </Modal>
  );
};

FirstAddRecipe.propTypes = {
  close: PropTypes.func,
};
