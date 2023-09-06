import React from "react";
import { NavLink } from "react-router-dom";
import csshead from "./Navigation.module.scss";
import cssfoot from "./NavigationFooter.module.scss";
import cssBurger from "./NavigationBurger.module.scss";

import propTypes from 'prop-types';

export const Navigation = ({ style, callback }) => {
  const cssSelector = (style) => {
    if (style === `csshead`) return csshead;
    if (style === `cssfoot`) return cssfoot;
    if (style === `cssBurger`) return cssBurger;
  }
  const css = cssSelector(style);
  return (
    <nav className={css.Navigation}>
      {style !== `cssfoot` && <NavLink onClick={callback} className={css.NavigationLink} to="/">Home</NavLink>}
      <NavLink onClick={callback} className={css.NavigationLink} to="/drinks">Drinks</NavLink>
      <NavLink onClick={callback} className={css.NavigationLink} to="/addrecipe">Add recipe</NavLink>
      <NavLink onClick={callback} className={css.NavigationLink} to="/myrecipes">My recipe</NavLink>
      <NavLink onClick={callback} className={css.NavigationLink} to="/favorites">Favorites</NavLink>
    </nav >
  );
};

Navigation.propTypes = {
  style: propTypes.oneOf(['csshead', 'cssfoot', 'cssBurger']).isRequired,
  callback: propTypes.func
}