import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFavoriteRecipesThunk,
  fetchMyRecipesThunk,
} from "../../redux/cockteil/cockteilsOperations";
import {
  selectFavRecipes,
  selectMyRecipes,
} from "../../redux/cockteil/cockteilsSelectors";
import { RecipesItem } from "../RecipesItem/RecipesItem";
import PropTypes from "prop-types";
import css from "./RecipesList.module.scss";

export const RecipesList = ({ type }) => {
  const dispatch = useDispatch();
  const recipes = useSelector(
    type === "myRecipes" ? selectMyRecipes : selectFavRecipes
  );
  const error = useSelector((state) => state.cockteil.error);

  useEffect(() => {
    if (type === "myRecipes") {
      dispatch(fetchMyRecipesThunk());
    } else if (type === "favoriteRecipes") {
      dispatch(fetchFavoriteRecipesThunk());
    }
  }, [dispatch, type]);

  return (
    <>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          {recipes.length > 0 ? (
            <ul className={css.recipes_list}>
              {recipes.map((recipe) => (
                <RecipesItem key={recipe._id} recipe={recipe} />
              ))}
            </ul>
          ) : (
            <p>No recipes available.</p>
          )}
        </>
      )}
    </>
  );
};

RecipesList.propTypes = {
  type: PropTypes.oneOf(["myRecipes", "favoriteRecipes"]).isRequired,
};
