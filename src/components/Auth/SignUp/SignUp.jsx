import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import style from "./SignUp.module.scss";

export const SignUp = () => {
  return (
    <div className={style.conteiner}>
      <div className={style.elips1}></div>
      <div className={style.elips2}></div>
      <div className={style.welcome}>
        <center>
          <h1 className={style.title}>Registration</h1>
          <Formik>
            {({ isSubmitting }) => (
              <Form>
                <Field
                  type="text"
                  name="fullname"
                  placeholder="Enter your fullname"
                />
                <ErrorMessage name="fullname" component="div" />

                <Field
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                />
                <ErrorMessage name="email" component="div" />

                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />

                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </center>
      </div>
      <div className={style.glass}></div>
    </div>
  );
};
