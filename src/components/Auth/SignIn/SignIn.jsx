import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./SignIn.module.scss";
import { NavLink } from "react-router-dom";
import { logInUser } from "../../../redux/auth/authOperations";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { selectIsLoading } from "../../../redux/auth/authSelectors";
import { Spiner } from "../../Loader/Loader";

export const SignIn = () => {
  const dispatch = useDispatch();
  const [showPassword, setshowPassword] = useState(false);

  const isLoading = useSelector(selectIsLoading);

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;
  // min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

  const SignupSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
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
        <h1 className={style.title}>Sign In</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SignupSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            dispatch(logInUser(values)).then((result) => {
              isLoading && <Spiner />;
              if (result.error) {
                toast.error(result.payload);
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
                      ? style.field + " " + style.invalid_border
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
                        : style.field
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
