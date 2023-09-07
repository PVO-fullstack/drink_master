import { useEffect } from "react";
import style from "./Loader.module.scss";

export const Loader = () => {
  // useEffect(() => {
  //   document.body.classList.toggle("blurred");
  //   return () => {
  //     document.body.classList.toggle("blurred");
  //   };
  // }, []);

  return <span className={style.loader}></span>;
};

export const Spiner = () => {
  return <span className={style.loader}></span>;
};
