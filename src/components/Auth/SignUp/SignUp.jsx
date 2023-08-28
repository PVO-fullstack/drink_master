import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./SignUp.module.scss";
import { NavLink } from "react-router-dom";
import { registerUser } from "../../../redux/auth/authOperations";
import { useDispatch } from "react-redux";
import { Toaster, toast } from "react-hot-toast";

export const SignUp = () => {
  const dispatch = useDispatch();

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;
  // min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

  const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const SignupSchema = Yup.object({
    // name: Yup.string()
    //   .max(15, "Must be 15 characters or less")
    //   .required("Required"),
    email: Yup.string()
      // .email("Invalid email address")
      .matches(emailRegexp, { message: "Invalid email address" })
      .required("Email required"),
    password: Yup.string()
      .matches(passwordRules, {
        message:
          "Password must contain min 6 characters, max 16 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit",
      })
      .required("Password required"),
  });

  return (
    <div className={style.conteiner}>
      <div className={style.form_conteiner}>
        <h1 className={style.title}>Registration</h1>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={SignupSchema}
          onSubmit={async (values, { resetForm }) => {
            console.log(values);
            dispatch(registerUser(values));
            resetForm();
          }}
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
                <Field
                  className={style.field}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                {dirty && (
                  <ErrorMessage
                    name="email"
                    // render={(errors) => toast.error(errors)}
                    component="span"
                    className={style.error}
                  />
                )}
                <Field
                  className={style.field + " " + style.last_field}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className={style.error}
                />
                <button
                  disabled={!(dirty && isValid)}
                  className={style.btn}
                  type="submit"
                >
                  Sign Up
                </button>
                <NavLink className={style.link} to="/signin">
                  Sign In
                </NavLink>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
