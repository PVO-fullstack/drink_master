import style from "./UserInfoModal.module.scss";
import closeSVG from "/images/SVG/x.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";
import addPhoto from "/images/SVG/add_photo.svg";
import { Field, Form, Formik } from "formik";
import { Modal } from "../Modal/Modal";
import { useEffect, useState } from "react";
import { changeAvatar } from "../../redux/auth/authOperations";

export const UserInfoModal = ({ close, closeModal }) => {
  const { name, avatarURL } = useSelector(selectUser);
  const [imgSrc, setImgSrc] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const dispatch = useDispatch();

  const closeInfo = () => {
    closeModal();
  };

  const changeFile = (event) => {
    const target = event.target;

    if (!target) {
      alert("Ничего не загружено");
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setAvatar(fileReader.result);
    };

    fileReader.readAsDataURL(target.files[0]);
  };

  useEffect(() => {
    close();
    return () => close();
  }, [close]);

  return (
    <Modal>
      <img
        onClick={closeInfo}
        className={style.closeModal}
        src={closeSVG}
        alt="close"
      />

      {/* <div onClick={handleChangeAvatar} className={style.avatarConteiner}>
        <img
        className={style.avatar}
        src={avatarURL}
        alt="Avatar"
        width={100}
        height={100}
        />
        
      </div> */}
      <Formik
        initialValues={{ name: `${name}`, avatar: "" }}
        // validationSchema={SignupSchema}
        onSubmit={async (values, { resetForm }) => {
          // const formData = new FormData();
          // formData.append("userpic", imgSrc, "avatar.jpg");
          // formData.append(values);
          // console.log("AAAAAA", values);

          dispatch(changeAvatar(values));
          resetForm();
        }}
      >
        {(formik) => {
          const { isValid, dirty, setFieldValue } = formik;
          return (
            <Form className={imgSrc ? style.foto : style.form}>
              {imgSrc ? (
                <img
                  className={style.avatarImg}
                  src={avatar}
                  alt="Avatar"
                  width={100}
                  height={100}
                />
              ) : (
                <div className={style.avatarConteiner}>
                  <Field
                    className={style.avatar}
                    type="file"
                    name="avatar"
                    onChange={(e) => {
                      setFieldValue("avatar", e.currentTarget.files[0]);
                      setImgSrc(e.currentTarget.files[0]);
                      changeFile(e);
                    }}
                  />
                  <img
                    className={style.addPhoto}
                    src={addPhoto}
                    alt="add photo"
                  />
                </div>
              )}
              <Field
                className={style.field}
                type="text"
                name="name"
                placeholder="Name"
              />
              <button
                // disabled={!(dirty && isValid)}
                className={style.btn}
                type="submit"
              >
                Save changes
              </button>
            </Form>
          );
        }}
      </Formik>
    </Modal>
  );
};
