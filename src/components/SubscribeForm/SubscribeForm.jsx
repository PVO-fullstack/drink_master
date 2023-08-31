import React from 'react';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from './SubscribeForm.module.scss'

const SubscribeForm = () => {
    const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const SignupSchema = Yup.object({
        email: Yup.string()
            .matches(emailRegexp)
            .required("Email required")
    });
    return (
        <Formik
            initialValues={{ email: "" }}
            validationSchema={SignupSchema}
            onSubmit={async (values, { resetForm }) => {
                console.log(values);
                // dispatch(registerUser(values));
                resetForm();
            }}
        >
            {(formik) => {
                const { isValid } = formik;
                return (
                    <Form className={css.SubscribeForm} >
                        <p className={css.SubscribeFormText}>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</p>
                        <Field
                            className={css.SubscribeFormInput}
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <button disabled={!isValid} className={css.SubscribeFormSubmit} type='submit'>Subscribe</button>
                    </Form>
                );
            }}
        </Formik>
    )
}

export default SubscribeForm