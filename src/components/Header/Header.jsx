import React, { useState } from "react";
import { Navigation } from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import Logo from "../Logo/Logo";
import css from './Header.module.scss'
import AlignJustify from "../ComponentsSVG/AlignJustify";
import CloseSVG from "../ComponentsSVG/CloseSVG";

export const Header = () => {
  const [BurgerNavigation, setBurgerNavigation] = useState(false);
  const togleBurgerBackdrop = (e) => {
    setBurgerNavigation(!BurgerNavigation)
    e.target.classList.toggle("active")
  };
  const burgerPosition = BurgerNavigation ? "84px" : "-100vh"


  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <Logo />
        <Navigation style="csshead" />
        <div className={css.headerSideWrapper}>
          <UserMenu />
          <button onClick={togleBurgerBackdrop} className={css.headerBurgerMenuBTN}>
            {BurgerNavigation ? <CloseSVG className={`headerBurgerMenuIcon`} fill={"#F3F3F3"} /> : <AlignJustify className={`headerBurgerMenuIcon`} fill={"#F3F3F3"} />}
          </button>
        </div>
      </div>
      <div className={css.headerBurgerBackdrop} style={{ top: burgerPosition }}>
        <Navigation style="cssBurger" />
      </div>
      <div className={css.headerUnderline}></div>
    </header>
  );
};
