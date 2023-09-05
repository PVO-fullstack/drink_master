import PropTypes from "prop-types";
import css from "./DrinksItem.module.scss";
import imageholder from "/placeholder_image.jpg";

export const DrinksItem = ({ recipe }) => {
  const { drinkThumb, drink } = recipe;
  return (
    <li className={css.recipes_item}>
      <div className={css.recipes_item__img_wrapper}>
        <img
          className={css.recipes_item__img}
          src={drinkThumb || imageholder}
          alt="Coctail"
        />
      </div>

      <div className={css.recipes_item__info_wrapper}>
        <div>
          <h2 className={css.recipes_item_title}>{drink}</h2>
          <p className={css.recipes_item__ingredients}>Ingredients</p>
        </div>
      </div>
    </li>
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
