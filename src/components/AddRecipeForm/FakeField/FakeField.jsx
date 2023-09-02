// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

import { connect, getIn } from 'formik';

import style from './FakeField.module.scss';

// ###################################################

const Component = (props) => {
  const { children, label } = props;

  //   const error = getIn(props.formik.errors, props.name);
  //   const touch = getIn(props.formik.touched, props.name);

  return (
    <div className={style.wrapper}>
      <div className={style.fakeLabel}>{label}</div>
      <div className={style.select}>{children}</div>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  formik: PropTypes.object,
  name: PropTypes.string,
};

export const FakeField = connect(Component);
