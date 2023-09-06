import { NavLink } from "react-router-dom";
import style from "./AuthNav.module.scss";

export const AuthNav = () => {
  return (
    <div className={style.conteiner}>
      {/* <div className={style.welcome}> */}
      <h1 className={style.title}>Welcome to the app!</h1>
      <p className={style.description}>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </p>

      <div className={style.btnConteiner}>
        <NavLink className={style.btn} to="/signup">
          Registration
        </NavLink>
        <NavLink className={style.btn} to="/signin">
          Sign in
        </NavLink>
        {/* </div> */}
      </div>
    </div>
  );
};
