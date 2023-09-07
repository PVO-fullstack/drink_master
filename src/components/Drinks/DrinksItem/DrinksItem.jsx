import PropTypes from "prop-types";
import css from "./DrinksItem.module.scss";
import imageholder from "/placeholder_image.jpg";
import { Link } from "react-router-dom";

export const DrinksItem = ({ recipe }) => {
  const { drinkThumb, drink, _id } = recipe;
  return (
    <Link to={`/recipes/${_id}`}>
      <li className={css.recipesItem}>
        <div className={css.recipesItemImgWrapper}>
          <img
            className={css.recipesItemImg}
            src={drinkThumb || imageholder}
            alt="Coctail"
          />
        </div>
        <div className={css.recipesItemInfoWrapper}>
          <h2 className={css.recipesItemTitle}>{drink}</h2>
          <p className={css.recipesItemIngredients}>Ingredients</p>
        </div>
      </li>
    </Link>
  );
};

DrinksItem.propTypes = {
  recipe: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    drinkThumb: PropTypes.string.isRequired,
    drink: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.oneOf(["recipes"]).isRequired,
  page: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  recipes: PropTypes.number.isRequired,
};
