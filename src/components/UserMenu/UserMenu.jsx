import { useSelector } from "react-redux";
import css from "./UserMenu.module.scss";
import { selectUser } from "../../redux/auth/authSelectors";
import UserDefaultSVG from "../ComponentsSVG/UserDefaultSVG";
import { UserLogoModal } from "../UserLogoModal/UserLogoModal";
import { useState } from "react";
import { UserInfoModal } from "../UserInfoModal/UserInfoModal";

const UserMenu = () => {
  const { name, avatarURL } = useSelector(selectUser);
  const [showLogoModal, setShowLogoModal] = useState(false);
  const [showUserInfoModal, setShowUserInfoModal] = useState(false);

  const handleShowUserInfo = () => {
    setShowUserInfoModal(true);
  };

  const handleCloseLogoModal = () => {
    setShowLogoModal(false);
  };

  const handleCloseUserInfoModal = () => {
    setShowUserInfoModal(false);
  };

  return (
    <div className={css.userMenu} onClick={() => setShowLogoModal(true)}>
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

      {showLogoModal && (
        <UserLogoModal
          close={handleCloseLogoModal}
          showUserInfo={handleShowUserInfo}
        />
      )}
      {showUserInfoModal && (
        <UserInfoModal
          closeModal={handleCloseUserInfoModal}
          close={handleCloseLogoModal}
        />
      )}
    </div>
  );
};

export default UserMenu;
