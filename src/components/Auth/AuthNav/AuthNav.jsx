import React from "react";
import { Button } from "../../Button/Button";
import { Link, NavLink } from "react-router-dom";
import style from "./AuthNav.module.scss";

export const AuthNav = () => {
  const handleRegistrationClick = () => {
    console.log("hello2");
    <Link to="/signup" />;
  };

  return (
    <div className={style.conteiner}>
      {/* <div className={style.elips1}></div>
      <div className={style.elips2}></div> */}
      <div className={style.welcome}>
        <h1 className={style.title}>Welcome to the app!</h1>
        <p className={style.description}>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>

        <div className={style.btn}>
          <NavLink className={style.link} to="/signup">
            Registration
          </NavLink>
        </div>
        <div className={style.btn + " " + style.nextBtn}>
          <NavLink className={style.link} to="/signin">
            Sign in
          </NavLink>
        </div>
      </div>
      <div className={style.glass}></div>
      {/* <div className={style.elips3}></div> */}
    </div>
  );
};
