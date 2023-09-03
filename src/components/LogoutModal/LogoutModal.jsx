import style from "./LogoutModal.module.scss";
import closeSVG from "/images/SVG/x.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";
import { Field, Form, Formik } from "formik";
import { Modal } from "../Modal/Modal";
import { useEffect, useState } from "react";
import { changeAvatar, logOutUser } from "../../redux/auth/authOperations";
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
