import React from 'react';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from './SubscribeForm.module.scss'
import { useDispatch } from 'react-redux';
import { subscribeUser } from '../../redux/auth/authOperations';

const SubscribeForm = () => {
    const dispatch = useDispatch();
    const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const EmailSchema = Yup.object({
        email: Yup.string()
            .matches(emailRegexp)
            .required("Email required")
    });
    return (
        <Formik
            initialValues={{ email: "" }}
            validationSchema={EmailSchema}
            onSubmit={async (values, { resetForm }) => {
                dispatch(subscribeUser(values));
                resetForm();
            }}
        >
            {(formik) => {
                const { isValid, dirty } = formik;
                return (
                    <Form className={css.SubscribeForm} >
                        <p className={css.SubscribeFormText}
                        >Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.
                        </p>
                        <Field
                            className={css.SubscribeFormInput}
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <button
                            disabled={!(dirty && isValid)}
                            className={css.SubscribeFormSubmit}
                            type='submit'>Subscribe
                        </button>
                    </Form>
                );
            }}
        </Formik>
    )
}

export default SubscribeForm