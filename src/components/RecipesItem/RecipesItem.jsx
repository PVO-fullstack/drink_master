import { SectionTitle } from "../Typography/SectionTitle/SectionTitle";
import PropTypes from "prop-types";
import css from "./RecipesItem.module.scss";
import cssButton from "../Button/Button.module.scss";

export const RecipesItem = ({ recipe }) => {
  const { drinkThumb, drink, instructions } = recipe;

  return (
    <li className={css.recipes_item}>
      <img className={css.recipes_item__img} src={drinkThumb} alt="Coctail" />
      <div>
        <SectionTitle>{drink}</SectionTitle>
        <p className={css.recipes_item__ingredients}>Ingredients</p>
        <p className={css.recipes_item__description}>{instructions}</p>
        <button className={`${cssButton.button} ${css.recipes_item__button}`}>
          See recipe
        </button>
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
