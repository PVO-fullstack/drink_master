import { SectionTitle } from "../Typography/SectionTitle/SectionTitle";
import PropTypes from "prop-types";
import css from "./RecipesItem.module.scss";
import cssButton from "../Button/Button.module.scss";
import { NavLink } from "react-router-dom";

export const RecipesItem = ({ recipe }) => {
  const { _id, drinkThumb, drink, instructions } = recipe;

  return (
    <li className={css.recipes_item}>
      <img className={css.recipes_item__img} src={drinkThumb} alt="Coctail" />
      <div>
        <SectionTitle>{drink}</SectionTitle>
        <p className={css.recipes_item__ingredients}>Ingredients</p>
        <p className={css.recipes_item__description}>{instructions}</p>
        <NavLink
          className={`${cssButton.button} ${css.recipes_item__button}`}
          to={`${_id}`}
        >
          See recipe
        </NavLink>
        <button className={`${cssButton.button} ${cssButton.icon}`}>
          Delete
        </button>
      </div>
    </li>
  );
};

RecipesItem.propTypes = {
  recipe: PropTypes.shape({
    drinkThumb: PropTypes.string.isRequired,
    drink: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired,
  }).isRequired,
};
