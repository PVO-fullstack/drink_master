import style from "./LogoutModal.module.scss";
import closeSVG from "/images/SVG/x.svg";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { logOutUser } from "../../redux/auth/authOperations";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

export const LogoutModal = ({ close, closeModal }) => {
  useEffect(() => {
    close();
    return () => close();
  }, [close]);

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

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    closeModal();
  };

  const logqOut = () => {
    dispatch(logOutUser());
  };

  return (
    <>
      {createPortal(
        <div className={style.backdrop}>
          <div className={style.modal}>
            <div className={style.backdrop}>
              <div className={style.modal}>
                <img
                  onClick={handleCloseModal}
                  className={style.closeModal}
                  src={closeSVG}
                  alt="close"
                />
                <h2 className={style.title}>
                  Are you sure you want to log out?
                </h2>
                <div className={style.btnConteiner}>
                  <button onClick={logqOut} className={style.btn} type="button">
                    Log out
                  </button>
                  <button
                    onClick={handleCloseModal}
                    className={style.btn}
                    type="button"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.getElementById("modal-root")
      )}
    </>
  );
};

LogoutModal.propTypes = {
  close: PropTypes.func,
  closeModal: PropTypes.func,
};
