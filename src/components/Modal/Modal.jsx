import React from "react";
import { createPortal } from "react-dom";
import style from "./Modal.module.scss";

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
