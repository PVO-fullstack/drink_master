import style from "./UserLogoModal.module.scss";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../redux/auth/authOperations";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import editSVG from "/images/SVG/edit.svg";
import { UserButton } from "../UserButton/UserButton";
import { UserInfoModal } from "../UserInfoModal/UserInfoModal";

export const UserLogoModal = ({ closeUserMenu }) => {
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    console.log("first");

    return () => {
      console.log("second");
    };
  }, []);

  useEffect(() => {
    console.log("first");
    () => {
      console.log("second");
      closeUserMenu();
    };
  });

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  const handleEditClick = () => {
    setEdit(true);
  };

  const handleCloseModal = () => {
    setEdit(false);
    closeUserMenu();
  };

  return (
    <>
      {createPortal(
        (!edit && (
          <UserButton change={handleEditClick} logout={handleLogout} />
        )) ||
          (edit && (
            <UserInfoModal
              close={handleCloseModal}
              isEdit={edit}
              closeUser={closeUserMenu}
            />
          )),
        document.getElementById("modal-root")
      )}
    </>
  );
};
