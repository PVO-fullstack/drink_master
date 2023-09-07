import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./SignIn.module.scss";
import { NavLink } from "react-router-dom";
import { logInUser } from "../../../redux/auth/authOperations";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { useState } from "react";

export const SignIn = () => {
  const dispatch = useDispatch();
  const [showPassword, setshowPassword] = useState(false);

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;
  // min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

  const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const SignupSchema = Yup.object({
    email: Yup.string()
      .matches(emailRegexp, { message: "Invalid email address" })
      .required("Email required"),
    password: Yup.string()
      .min(6, "Password is too short - should be 6 chars minimum.")
      .max(16, "Password is too long - should be 16 chars maximum.")
      .matches(passwordRules, {
        message:
          "Password must contain 1 lowercase, 1 uppercase letter and 1 number.",
      })
      .required("Password required"),
  });

  return (
    <div className={style.conteiner}>
      <div className={style.form_conteiner}>
        <h1 className={style.title}>Sign In</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SignupSchema}
          onSubmit={(values, { resetForm }) => {
            dispatch(logInUser(values)).then((result) => {
              if (result.error) {
                toast.error("Email or password invalid");
                return;
              }
              resetForm();
            });
          }}
        >
          {(formik) => {
            const {
              isValid,
              dirty,
              handleChange,
              setFieldTouched,
              touched,
              errors,
            } = formik;
            return (
              <Form className={style.form}>
                <Field
                  className={
                    touched.email && !errors.email
                      ? style.field + " " + style.valid_border
                      : errors.email && touched.email
                      ? style.field +
                        " " +
                        style.invalid_border +
                        " " +
                        style.last_field
                      : style.field
                  }
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setFieldTouched("email");
                    handleChange(e);
                  }}
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={style.error}
                />
                <div className={style.hide}>
                  <Field
                    className={
                      touched.password && !errors.password
                        ? style.field +
                          " " +
                          style.valid_border +
                          " " +
                          style.last_field
                        : errors.password && touched.password
                        ? style.field +
                          " " +
                          style.invalid_border +
                          " " +
                          style.last_field
                        : style.field + " " + style.last_field
                    }
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    onChange={(e) => {
                      setFieldTouched("password");
                      handleChange(e);
                    }}
                  />
                  <button
                    onClick={() => setshowPassword((prev) => !prev)}
                    className={style.showPassword}
                    type="button"
                  >
                    {showPassword ? "hide" : "show"}
                  </button>
                </div>

                {dirty}

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
                  Sign In
                </button>
                <NavLink className={style.link} to="/signup">
                  Registration
                </NavLink>
              </Form>
            );
          }}
        </Formik>
      </div>
      </div>
  );
};
