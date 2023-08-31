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
import { fetchRecipesThunk } from "../../redux/cockteil/cockteilsOperations";
import Paginator from "../Paginator/Paginator";

const determineRecipesPerPage = () => {
  if (window.innerWidth <= 768) {
    return 10; // Для мобільного
  } else if (window.innerWidth <= 1024) {
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
  /* змінити type на own */
  const error = useSelector(selectError);

  useEffect(() => {
    if (type === "own") {
      dispatch(
        fetchRecipesThunk({ type, page: currentPage, limit: recipesPerPage })
      );
    } else if (type === "favorite") {
      // dispatch();
      console.log("fav");
    }
  }, [dispatch, currentPage, recipesPerPage, type]);

  // useEffect(() => {
  //   dispatch(
  //     fetchRecipesThunk({ type, page: currentPage, limit: recipesPerPage })
  //   );
  // }, [dispatch, currentPage, recipesPerPage, type]);

  const calculateTotalPages = (totalRecipes, recipesPerPage) => {
    return Math.ceil(totalRecipes / recipesPerPage);
  };
  // const memoizedRecipes = useMemo(() => recipes, [recipes]);

  return (
    <>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <ul className={css.recipes_list}>
            {recipes.map((recipe) => (
              <RecipesItem key={recipe._id} recipe={recipe} type={type} />
            ))}
          </ul>
          {totalRecipes > 9 && (
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
/* змінити type на own */
