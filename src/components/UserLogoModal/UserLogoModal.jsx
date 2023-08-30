import style from "./UserLogoModal.module.scss";
import { Modal } from "../Modal/Modal";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../redux/auth/authOperations";
import { UserInfoModal } from "../UserInfoModal/UserInfoModal";
import { useState } from "react";

export const UserLogoModal = ({ close }) => {
  const [profile, setProfile] = useState(false);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  const handleClikBackdrop = (e) => {
    console.log("CT", e.currentTarget);
    console.log("T", e.target);
  };

  const handleEditClick = () => {
    setProfile(true);
  };

  console.log("qqq", close);

  return (
    <Modal>
      {!profile ? (
        <div onClick={handleClikBackdrop} className={style.btnConteiner}>
          <button onClick={handleEditClick} className={style.btn} type="button">
            Edit profile
          </button>
          <button onClick={handleLogout} className={style.btn} type="button">
            Log out
          </button>
        </div>
      ) : (
        <UserInfoModal close={close} />
      )}
    </Modal>
  );
};
