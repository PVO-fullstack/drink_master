// import React from 'react'
import { Modal } from "../../Modal/Modal";
import { Motivation } from "../../Motivation/Motivation";
import style from "./TenRecipes.module.scss";
import PropTypes from "prop-types";

export const TenRecipes = ({ close }) => {
  return (
    <Modal>
      <Motivation closeModal={close} className={style.container}>
        Wow! You have added 10 recipes to your favorites!
      </Motivation>
    </Modal>
  );
};

TenRecipes.propTypes = {
  close: PropTypes.func,
};
