import { useSelector } from "react-redux";
import css from "./UserMenu.module.scss";
import { selectUser } from "../../redux/auth/authSelectors";
import UserDefaultSVG from "../ComponentsSVG/UserDefaultSVG";
import { UserLogoModal } from "../UserLogoModal/UserLogoModal";
import { useState } from "react";
import { Modal } from "../Modal/Modal";

const UserMenu = () => {
  const { name, avatarURL } = useSelector(selectUser);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  return (
    <div className={css.userMenu} onClick={() => setShowModal(true)}>
      {avatarURL ? (
        <img
          src={avatarURL}
          alt="Avatar image"
          className={css.userMenuImg}
          width={44}
          height={44}
        ></img>
      ) : (
        <UserDefaultSVG className={`userMenuImg`} fill={"#F3F3F3"} />
      )}

      <p className={css.userMenuName}>{name ? name : "Name"}</p>
      {showModal ? <UserLogoModal closeUserMenu={closeModal} /> : ""}
    </div>
  );
};

export default UserMenu;
