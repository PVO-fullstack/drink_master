import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./SignIn.module.scss";
import { NavLink } from "react-router-dom";

export const SignIn = () => {
  return (
    <div className={style.conteiner}>
      {/* <div className={style.elips1}></div>
      <div className={style.elips2}></div> */}
      <div className={style.form_conteiner}>
        {/* <center> */}
        <h1 className={style.title}>Sign In</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
          }}
        >
          {({ isSubmitting }) => (
            <Form className={style.form}>
              <Field
                className={style.field}
                type="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage name="email" component="div" />

              <Field
                className={style.field + " " + style.last_field}
                type="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage name="password" component="div" />

              <button
                className={style.btn}
                type="submit"
                disabled={isSubmitting}
              >
                Sign In
              </button>
              <NavLink className={style.link} to="/signup">
                Registration
              </NavLink>
            </Form>
          )}
        </Formik>
        {/* </center> */}
      </div>
      <div className={style.glass}></div>
    </div>
  );
};
