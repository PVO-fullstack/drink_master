import React from "react";
import { NavLink } from "react-router-dom";
import csshead from "./Navigation.module.scss";
import cssfoot from "./NavigationFooter.module.scss";

import propTypes from 'prop-types';

export const Navigation = ({ style }) => {
  let css = style === 'csshead' ? csshead : cssfoot;
  return (
    <nav className={css.Navigation}>
      <NavLink className={css.NavigationLink} to="/">Home</NavLink>
      <NavLink className={css.NavigationLink} to="/drinks">Drinks</NavLink>
      <NavLink className={css.NavigationLink} to="/addrecipe">Add recipe</NavLink>
      <NavLink className={css.NavigationLink} to="/myrecipes">My recipe</NavLink>
      <NavLink className={css.NavigationLink} to="/favorites">Favorites</NavLink>
    </nav >
  );
};

Navigation.propTypes = {
  style: propTypes.oneOf(['csshead', 'cssfoot']).isRequired,
}