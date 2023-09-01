import style from "./UserInfoModal.module.scss";
import closeSVG from "/images/SVG/x.svg";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";
import addPhoto from "/images/SVG/add_photo.svg";
import { Field, Form, Formik } from "formik";
import { Modal } from "../Modal/Modal";
import { useEffect } from "react";

export const UserInfoModal = ({ close, closeModal }) => {
  const { name, avatarURL } = useSelector(selectUser);

  const closeInfo = () => {
    closeModal();
  };

  const handleChangeAvatar = () => {
    console.log("first");
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

      <div onClick={handleChangeAvatar} className={style.avatarConteiner}>
        <img
          className={style.avatar}
          src={avatarURL}
          alt="Avatar"
          width={100}
          height={100}
        />
        <img className={style.addPhoto} src={addPhoto} alt="add photo" />
      </div>
      <Formik
        initialValues={{ name: `${name}` }}
        // validationSchema={SignupSchema}
        // onSubmit={async (values, { resetForm }) => {
        //   console.log(values);
        //   dispatch(logInUser(values));
        //   resetForm();
        // }}
      >
        {(formik) => {
          const { isValid, dirty } = formik;
          return (
            <Form className={style.form}>
              <label className={style.img}>
                <input
                  type="file"
                  name="avatar"
                  // onChange={(event) => {
                  //   setFieldValue("avatar", event.currentTarget.files[0]);
                  // }}
                />
              </label>
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
                onClick={() => logOut()}
              >
                Sign In
              </button>
            </Form>
          );
        }}
      </Formik>
    </Modal>
  );
};
