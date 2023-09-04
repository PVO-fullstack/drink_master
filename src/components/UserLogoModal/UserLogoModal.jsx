import { useEffect } from "react";
import style from "./UserLogoModal.module.scss";
import editSVG from "/images/SVG/edit.svg";
import PropTypes from "prop-types";

export const UserLogoModal = ({ showUserInfo, showLogOut, closeModal }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [closeModal]);

  const showUser = () => {
    showUserInfo();
  };

  const showLogOutModal = () => {
    showLogOut();
  };

  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <div onClick={handleCloseModal} className={style.backdrop}>
        <div className={style.modal}>
          <div className={style.btnConteiner}>
            <button onClick={showUser} className={style.edit} type="button">
              Edit profile
              <img className={style.edit_swg} src={editSVG} alt="edit" />
            </button>
            <button
              onClick={showLogOutModal}
              className={style.btn}
              type="button"
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

UserLogoModal.propTypes = {
  showUserInfo: PropTypes.func,
  showLogOut: PropTypes.func,
  closeModal: PropTypes.func,
};
