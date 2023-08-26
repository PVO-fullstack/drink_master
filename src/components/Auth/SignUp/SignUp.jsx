import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./SignUp.module.scss";
import { NavLink } from "react-router-dom";
import { registerUser } from "../../../redux/auth/authOperations";
import { useDispatch } from "react-redux";

export const SignUp = () => {
  const dispatch = useDispatch();

  // const handleSubmit = () => {
  //   dispatch(registerUser());
  // };

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  // min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

  const SignupSchema = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
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

            <Field
              className={style.field + " " + style.last_field}
              type="password"
              name="password"
              placeholder="Password"
            />

            <button className={style.btn} type="submit">
              Sign Up
            </button>
            <NavLink className={style.link} to="/signin">
              Sign In
            </NavLink>
          </Form>
        </Formik>
      </div>
      <div className={style.glass}></div>
    </div>
  );
};
