import style from "./UserLogoModal.module.scss";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../redux/auth/authOperations";
import { useState } from "react";

export const UserLogoModal = ({ change }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  const handleEditClick = () => {
    change();
  };

  console.log("qqq", change);

  return (
    <div className={style.btnConteiner}>
      <button onClick={handleEditClick} className={style.btn} type="button">
        Edit profile
      </button>
      <button onClick={handleLogout} className={style.btn} type="button">
        Log out
      </button>
    </div>
  );
};
