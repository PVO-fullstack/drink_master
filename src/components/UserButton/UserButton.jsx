import React from "react";
import style from "../UserLogoModal/UserLogoModal.module.scss";
import editSVG from "/images/SVG/edit.svg";

export const UserButton = ({ change, logout }) => {
  const changeModal = () => {
    change();
  };

  return (
    <div className={style.backdrop}>
      <div className={style.modal}>
        <div className={style.btnConteiner}>
          <button onClick={changeModal} className={style.edit} type="button">
            Edit profile
            <img className={style.edit_swg} src={editSVG} alt="edit" />
          </button>
          <button className={style.btn} type="button">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};
