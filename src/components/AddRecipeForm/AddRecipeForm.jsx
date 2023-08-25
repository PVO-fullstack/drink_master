// import React from 'react'
// import PropTypes from "prop-types";
import { Formik, Form, Field } from 'formik';

// ###################################################

export const AddRecipeForm = () => {
  return (
    <Formik>
      <Form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 5,
          alignItems: 'start',
        }}
      >
        <Field />
        <Field />
        <Field />
      </Form>
    </Formik>
  );
};

// AddRecipeForm.propTypes = {
//     children: PropTypes.node,
//     variant: PropTypes.string,
//     disabled: PropTypes.bool,
//   };
