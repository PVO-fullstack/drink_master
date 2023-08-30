import style from "./UserInfoModal.module.scss";
import closeSVG from "/images/SVG/x.svg";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";
import addPhoto from "/images/SVG/add_photo.svg";
import { Field, Form, Formik } from "formik";

export const UserInfoModal = ({ close }) => {
  const { name, avatarURL } = useSelector(selectUser);

  console.log("user", close);

  const handleCloseModal = () => {
    close();
  };

  return (
    <>
      <img
        onClick={handleCloseModal}
        className={style.closeModal}
        src={closeSVG}
        alt="close"
      />
      <div className={style.avatarConteiner}>
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
              <Field
                className={style.field}
                type="text"
                name="name"
                placeholder="Name"
              />
              <button
                disabled={!(dirty && isValid)}
                className={style.btn}
                type="submit"
              >
                Sign In
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
