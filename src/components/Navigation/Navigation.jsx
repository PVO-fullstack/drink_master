import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={css.headerNavigation}>
      <NavLink className={css.headerNavigationLink} to="/">Home</NavLink>
      <NavLink className={css.headerNavigationLink} to="/drinks">Drinks</NavLink>
      <NavLink className={css.headerNavigationLink} to="/addrecipe">Add recipe</NavLink>
      <NavLink className={css.headerNavigationLink} to="/myrecipes">My recipe</NavLink>
      <NavLink className={css.headerNavigationLink} to="/favorites">Favorites</NavLink>
    </nav>
  );
};
