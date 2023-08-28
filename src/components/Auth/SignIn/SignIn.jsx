import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./SignIn.module.scss";
import { NavLink } from "react-router-dom";
import { logInUser } from "../../../redux/auth/authOperations";
import { useDispatch } from "react-redux";

export const SignIn = () => {
  const dispatch = useDispatch();

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;
  // min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

  const SignupSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .matches(passwordRules, {
        message: "Please create a stronger password",
      })
      .required("Required"),
  });

  return (
    <div className={style.conteiner}>
      <div className={style.form_conteiner}>
        <h1 className={style.title}>Sign In</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SignupSchema}
          onSubmit={async (values, { resetForm }) => {
            console.log(values);
            dispatch(logInUser(values));
            resetForm();
          }}
        >
          <Form className={style.form}>
            <Field
              className={style.field}
              type="email"
              name="email"
              placeholder="Email"
            />

            <Field
              className={style.field + " " + style.last_field}
              type="password"
              name="password"
              placeholder="Password"
            />

            <button className={style.btn} type="submit">
              Sign In
            </button>
            <NavLink className={style.link} to="/signup">
              Registration
            </NavLink>
          </Form>
        </Formik>
      </div>
      <div className={style.glass}></div>
    </div>
  );
};
