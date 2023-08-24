import React from "react";
import { Link, Outlet } from "react-router-dom";
import css from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={css.nav}>
      <Link to="/">Home</Link>
      <Link to="/drinks">Drinks</Link>
      <Link to="/addrecipe">Add recipe</Link>
      <Link to="/myrecipes">My recipe</Link>
      <Link to="/favorites">Favorites</Link>
      <Outlet />
    </nav>
  );
};
