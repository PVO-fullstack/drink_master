import style from "./UserInfoModal.module.scss";
import closeSVG from "/images/SVG/x.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";
import { Field, Form, Formik } from "formik";
import { Modal } from "../Modal/Modal";
import { useEffect, useState } from "react";
import { changeAvatar } from "../../redux/auth/authOperations";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

export const UserInfoModal = ({ close, closeModal }) => {
  const { name, avatarURL } = useSelector(selectUser);
  const [imgSrc, setImgSrc] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const dispatch = useDispatch();

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

  const closeInfo = () => {
    closeModal();
  };

  const changeFile = (event) => {
    const target = event.target;

    setImgSrc(target.files[0]);

    if (!target) {
      alert("Нічого не завантажено");
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setAvatar(fileReader.result);
    };

    fileReader.readAsDataURL(target.files[0]);
  };

  const handleOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <>
      {createPortal(
        <div onClick={handleOverlayClick} className={style.backdrop}>
          <div className={style.modal}>
            <img
              onClick={closeInfo}
              className={style.closeModal}
              src={closeSVG}
              alt="close"
            />

            <div className={style.avatarConteiner}>
              <img
                className={style.avatar}
                src={avatar || avatarURL}
                alt="Avatar"
                width={100}
                height={100}
              />
            </div>
            <Formik
              initialValues={{ name: `${name}`, avatar: "" }}
              onSubmit={async (values, { resetForm }) => {
                const formData = new FormData();
                formData.append("name", values.name);
                formData.append("avatar", imgSrc);
                dispatch(changeAvatar(formData));
                resetForm();
              }}
            >
              <Form className={style.form}>
                <Field
                  className={style.avatar}
                  type="file"
                  name="avatar"
                  onChange={(e) => {
                    changeFile(e);
                  }}
                />

                <Field
                  className={style.field}
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <button className={style.btn} type="submit">
                  Save changes
                </button>
              </Form>
            </Formik>
          </div>
        </div>,
        document.getElementById("modal-root")
      )}
    </>
  );
};

UserInfoModal.propTypes = {
  close: PropTypes.func,
  closeModal: PropTypes.func,
};
