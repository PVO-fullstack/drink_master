import { createPortal } from "react-dom";
import style from "./Modal.module.scss";
import PropTypes from "prop-types";

export const Modal = ({ children }) => {
  return (
    <>
      {createPortal(
        <div className={style.backdrop}>
          <div className={style.modal}>{children}</div>
        </div>,
        document.getElementById("modal-root")
      )}
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
};
