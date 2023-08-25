import React from "react";
import { Navigation } from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import Logo from "../Logo/Logo";
import css from './Header.module.scss'

export const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <Logo />
        <Navigation />
        <UserMenu />
      </div>
    </header>
  );
};
