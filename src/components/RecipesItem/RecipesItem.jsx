import { SectionTitle } from "../Typography/SectionTitle/SectionTitle";
import PropTypes from "prop-types";
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

export const RecipesItem = ({
  recipe,
  type,
  page,
  limit,
  totalPages,
  recipes,
}) => {
  const dispatch = useDispatch();
  const { _id, drinkThumb, drink, instructions } = recipe;

  const deleteRecipe = async () => {
    let newPage = page;
    if (totalPages > 1 && newPage === totalPages && recipes === 1) newPage -= 1;
    if (type === "own") {
      await dispatch(deleteRecipeThunk({ _id, type }));
      await dispatch(fetchRecipesThunk({ type, page: newPage, limit }));
    } else if (type === "favorite") {
      await dispatch(updateFavRecipeThunk({ _id, type }));
      await dispatch(fetchFavRecipesThunk({ type, page: newPage, limit }));
    }
  };

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
        <button
          onClick={() => dispatch(deleteRecipe)}
          className={`${cssButton.button} ${cssButton.icon}`}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

RecipesItem.propTypes = {
  recipe: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    drinkThumb: PropTypes.string.isRequired,
    drink: PropTypes.string.isRequired,
    instructions: PropTypes.array.isRequired,
  }).isRequired,
  type: PropTypes.oneOf(["own", "favorite"]).isRequired,
  page: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  recipes: PropTypes.number.isRequired,
};
