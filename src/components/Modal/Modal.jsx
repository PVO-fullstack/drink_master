import React, { useState } from "react";
import { createPortal } from "react-dom";
import style from "./Modal.module.scss";
import { UserLogoModal } from "../UserLogoModal/UserLogoModal";
import { UserInfoModal } from "../UserInfoModal/UserInfoModal";
import { useStateManager } from "react-select";

export const Modal = ({ children }) => {
  return (
    <>
      {/* {createPortal( */}
      <div className={style.backdrop}>
        <div className={style.modal}>{children}</div>
      </div>
      {/* document.getElementById("modal-root") */}
      {/* )} */}
    </>
  );
};
