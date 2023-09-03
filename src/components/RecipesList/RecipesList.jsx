import PropTypes from "prop-types";
import css from "./RecipesList.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RecipesItem } from "../RecipesItem/RecipesItem";
import {
  selectError,
  selectFavRecipes,
  selectMyRecipes,
} from "../../redux/cockteil/cockteilsSelectors";
import {
  fetchFavRecipesThunk,
  fetchRecipesThunk,
} from "../../redux/cockteil/cockteilsOperations";
import Paginator from "../Paginator/Paginator";
import { NotFoundComponent } from "../NotFound/NotFoundComponent";

const determineRecipesPerPage = () => {
  if (window.innerWidth < 768) {
    return 10; // Для мобільного
  } else if (window.innerWidth >= 768 && window.innerWidth <= 1440) {
    return 8; // Для планшета
  } else {
    return 9; // Для десктопу
  }
};

export const RecipesList = ({ type }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = determineRecipesPerPage();
  const { recipes, totalRecipes } = useSelector(
    type === "own" ? selectMyRecipes : selectFavRecipes
  );

  const recipesLength = recipes.length;

  const error = useSelector(selectError);

  useEffect(() => {
    if (type === "own") {
      dispatch(
        fetchRecipesThunk({ type, page: currentPage, limit: recipesPerPage })
      );
    } else if (type === "favorite") {
      dispatch(
        fetchFavRecipesThunk({ type, page: currentPage, limit: recipesPerPage })
      );
    }
  }, [dispatch, currentPage, recipesPerPage, type]);

  const calculateTotalPages = (totalRecipes, recipesPerPage) => {
    return Math.ceil(totalRecipes / recipesPerPage);
  };

  return (
    <>
      {error ? (
        <p className={css.error}>Error: {error}</p>
      ) : recipesLength < 1 ? (
        <NotFoundComponent type={type} />
      ) : (
        <>
          <ul className={css.recipes_list}>
            {recipes.map((recipe) => (
              <RecipesItem
                key={recipe._id}
                recipe={recipe}
                type={type}
                page={currentPage}
                limit={recipesPerPage}
                totalPages={calculateTotalPages(totalRecipes, recipesPerPage)}
                recipes={recipesLength}
              />
            ))}
          </ul>
          {calculateTotalPages(totalRecipes, recipesPerPage) > 1 && (
            <Paginator
              currentPage={currentPage}
              totalPages={calculateTotalPages(totalRecipes, recipesPerPage)}
              onPageChange={setCurrentPage}
            />
          )}
        </>
      )}
    </>
  );
};

RecipesList.propTypes = {
  type: PropTypes.oneOf(["own", "favorite"]).isRequired,
};
