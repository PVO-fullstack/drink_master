import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./SignIn.module.scss";
import { NavLink } from "react-router-dom";
import { logInUser } from "../../../redux/auth/authOperations";
import { useDispatch } from "react-redux";
import { Toaster, toast } from "react-hot-toast";

export const SignIn = () => {
  const dispatch = useDispatch();

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
              if (result.error) {
                console.log("first", result);
                toast.error(result.payload);
                return;
              }
              resetForm();
            });
          }}
        >
          {(formik) => {
            const { isValid, dirty, setFieldValue } = formik;
            return (
              <Form className={style.form}>
                <Field
                  className={style.field}
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setFieldValue("email", e.currentTarget.value);
                  }}
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={style.error}
                />

                <Field
                  className={style.field + " " + style.last_field}
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setFieldValue("password", e.currentTarget.value);
                  }}
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
