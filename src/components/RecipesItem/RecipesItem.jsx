import { SectionTitle } from "../Typography/SectionTitle/SectionTitle";
import PropTypes from "prop-types";
import css from "./RecipesItem.module.scss";
import cssButton from "../Button/Button.module.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteRecipeThunk,
  updateFavRecipeThunk,
} from "../../redux/cockteil/cockteilsOperations";
import { useState } from "react";

export const RecipesItem = ({ recipe, type }) => {
  const dispatch = useDispatch();
  const { _id, drinkThumb, drink, instructions } = recipe;

  const [isDeleted, setIsDeleted] = useState(false);

  // const deleteRecipe = async () => {
  //   await dispatch(deleteRecipeThunk({ _id, type }));
  //   setIsDeleted(true);
  // };

  const deleteRecipe = async () => {
    await dispatch(
      type === "own"
        ? deleteRecipeThunk({ _id, type })
        : updateFavRecipeThunk({ _id, type })
    );
    setIsDeleted(true);
  };

  if (isDeleted) {
    return null;
  }

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
    instructions: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
};
