import { useEffect } from "react";
import css from "./RecipePageHero.module.scss";
import { PageTitle } from "../index.js";
import { RecipeInngredientsList, RecipePreparation } from "../index.js";
import { useDispatch, useSelector } from "react-redux";
import { selectRecipe } from "../../redux/recipe/recipeSelector.js";
import {
  addToFavoriteThunk,
  fetchRecipIdThunk,
} from "../../redux/recipe/recipeOperations.js";
import { refreshUser } from "../../redux/auth/authOperations";

export const RecipePageHero = () => {
  const dispatch = useDispatch();
  const recipe = useSelector(selectRecipe);

  const currentURL = window.location.href;
  const parts = currentURL.split("/");
  const recipeId = parts[parts.length - 1];

  const handleAddToFavorite = () => {
    dispatch(addToFavoriteThunk(recipeId));
    dispatch(refreshUser());
  };

  useEffect(() => {
    dispatch(fetchRecipIdThunk(recipeId));
  }, [dispatch, recipeId]);

  return (
    <div className={css.page}>
      <div className={css.page_recipe}>
        <p className={css.glass}>{recipe.glass}</p>
        <div className={css.recipe_list}>
          <div className={css.recipe}>
            <PageTitle className={css.recipe_title}>{recipe.drink}</PageTitle>
            {recipe.description !== "" && (
              <p className={css.descrip}>{recipe.description}</p>
            )}
            <button
              onClick={handleAddToFavorite}
              className={css.btn_add}
              type="button"
            >
              {recipe.isFavorite === false
                ? "Add to favorite recipe"
                : "Remove from favorite"}
            </button>
          </div>
          {recipe.drinkThumb === "" ? (
            <img src="public/images/placeholders/placeholder400.jpg" alt="" />
          ) : (
            <img
              className={css.img}
              src={recipe.drinkThumb}
              alt={recipe.drink}
            />
          )}
        </div>
      </div>
      <RecipeInngredientsList ingredients={recipe.ingredients} />
      <RecipePreparation instructions={recipe.instructions} />
    </div>
  );
};
