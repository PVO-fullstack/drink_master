import PropTypes from "prop-types";
import { RiDeleteBinLine } from "react-icons/ri";
import css from "./RecipesItem.module.scss";
import cssButton from "../Button/Button.module.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteRecipeThunk,
  fetchFavRecipesThunk,
  fetchRecipesThunk,
  updateFavRecipeThunk,
} from "../../redux/cockteil/cockteilsOperations";
import imageholder from "/placeholder_image.jpg";

export const RecipesItem = ({
  recipe,
  type,
  page,
  limit,
  totalPages,
  recipes,
}) => {
  const dispatch = useDispatch();
  const { _id, drinkThumb, drink, description } = recipe;

  const deleteRecipe = async () => {
    try {
      let newPage = page;
      if (totalPages > 1 && newPage === totalPages && recipes === 1)
        newPage -= 1;
      if (type === "own") {
        await dispatch(deleteRecipeThunk({ _id, type }));
        await dispatch(fetchRecipesThunk({ type, page: newPage, limit }));
      } else if (type === "favorite") {
        await dispatch(updateFavRecipeThunk({ _id, type }));
        await dispatch(fetchFavRecipesThunk({ type, page: newPage, limit }));
      }
    } catch (error) {
      alert("Something went wrong:", error.message);
    }
  };

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

        <p className={css.recipes_item__description}>{description}</p>

        <div className={css.recipes_item__button_wrapper}>
          <NavLink
            className={`${cssButton.button} ${css.nav_link}`}
            to={`/recipes/${_id}`}
          >
            See recipe
          </NavLink>
          <button
            type="button"
            onClick={() => dispatch(deleteRecipe)}
            className={`${cssButton.button} ${cssButton.icon}`}
          >
            <RiDeleteBinLine style={{ width: "24px", height: "24px" }} />
          </button>
        </div>
      </div>
    </li>
  );
};

RecipesItem.propTypes = {
  recipe: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    drinkThumb: PropTypes.string.isRequired,
    drink: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.oneOf(["own", "favorite"]).isRequired,
  page: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  recipes: PropTypes.number.isRequired,
};
