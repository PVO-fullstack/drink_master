import React, { useState } from "react";
import { createPortal } from "react-dom";
import style from "./Modal.module.scss";
import { UserLogoModal } from "../UserLogoModal/UserLogoModal";
import { UserInfoModal } from "../UserInfoModal/UserInfoModal";
import { useStateManager } from "react-select";

export const Modal = ({ close }) => {
  const [userInfo, setUserInfo] = useState(false);

  const changeModal = () => {
    setUserInfo(true);
  };

  console.log("close", close(false));

  // const closeModal = () => {
  //   close();
  // };

  return (
    <>
      {createPortal(
        <div className={style.backdrop}>
          <div className={style.modal}>
            {!userInfo ? (
              <UserLogoModal change={changeModal} />
            ) : (
              <UserInfoModal closeModal={close} />
            )}
          </div>
        </div>,
        document.getElementById("modal-root")
      )}
    </>
  );
};
