import { useSelector } from "react-redux";
import css from "./UserMenu.module.scss";
import { selectUser } from "../../redux/auth/authSelectors";
import UserDefaultSVG from "../ComponentsSVG/UserDefaultSVG";
import { UserLogoModal } from "../UserLogoModal/UserLogoModal";
import { useState } from "react";
import { UserInfoModal } from "../UserInfoModal/UserInfoModal";
import { LogoutModal } from "../LogoutModal/LogoutModal";

const UserMenu = () => {
  const { name, avatarURL } = useSelector(selectUser);
  const [showLogoModal, setShowLogoModal] = useState(false);
  const [showUserInfoModal, setShowUserInfoModal] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false);

  const handleShowLogoModal = () => {
    setShowLogoModal(!showLogoModal);
  };

  const handleCloseLogoModal = () => {
    setShowLogoModal(false);
  };

  const handleShowUserInfo = () => {
    setShowUserInfoModal(true);
  };

  const handleCloseUserInfoModal = () => {
    setShowUserInfoModal(false);
  };

  const handleShowLogOut = () => {
    setShowLogOut(true);
  };

  const handleCloseLogOut = () => {
    setShowLogOut(false);
  };

  return (
    <div
      className={css.userMenu}
      onClick={handleShowLogoModal}
      role="button"
      aria-roledescription="button"
    >
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
          closeModal={handleShowLogoModal}
          showUserInfo={handleShowUserInfo}
          showLogOut={handleShowLogOut}
          setShowLogoModal={setShowLogoModal}
        />
      )}
      {showUserInfoModal && (
        <UserInfoModal
          closeModal={handleCloseUserInfoModal}
          close={handleCloseLogoModal}
        />
      )}
      {showLogOut && (
        <LogoutModal
          close={handleCloseLogoModal}
          closeModal={handleCloseLogOut}
        />
      )}
    </div>
  );
};

export default UserMenu;
