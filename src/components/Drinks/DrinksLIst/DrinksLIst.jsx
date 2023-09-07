import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./DrinksLIst.module.scss";
import { DrinksItem } from "../DrinksItem/DrinksItem";
import { memoizedSelectAllRecipes } from "../../../redux/drinks/selectorsDrinks";
import { fetchAllRecipesThunk } from "../../../redux/drinks/operationsDrinks";
import Paginator from "../../Paginator/Paginator";
import noСontentImg from "/noСontentImg.png";

const determineRecipesPerPage = () => {
  if (window.innerWidth <= 375) {
    return 10; // Для мобільного
  } else if (window.innerWidth >= 768 && window.innerWidth <= 1439) {
    return 8; // Для планшета
  } else {
    return 9; // Для десктопу
  }
};

const DrinksList = ({
  type,
  searchText,
  selectedCategory,
  selectedIngredient,
}) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = determineRecipesPerPage();
  const { recipes, totalRecipes } = useSelector(
    type === "recipes" ? memoizedSelectAllRecipes : {}
  );

  const recipesLength = recipes.length;

  useEffect(() => {
    if (type === "recipes") {
      dispatch(
        fetchAllRecipesThunk({
          type,
          page: currentPage,
          limit: recipesPerPage,
          search: searchText,
          category: selectedCategory,
          ingredient: selectedIngredient,
        })
      );
    }
  }, [
    dispatch,
    currentPage,
    recipesPerPage,
    type,
    searchText,
    selectedCategory,
    selectedIngredient,
  ]);

  const calculateTotalPages = (totalRecipes, recipesPerPage) => {
    return Math.ceil(totalRecipes / recipesPerPage);
  };

  return (
    <>
      {recipes.length === 0 ? (
        <div className={css.noResults}>
          <img
            src={noСontentImg}
            alt="No Results"
            className={css.noResaltsImg}
          />
          <p className={css.noResaltsText}>
            Sorry, but nothing was found for your query. Change the search
            parameters.
          </p>
        </div>
      ) : (
        <>
          <ul className={css.recipesList}>
            {recipes.map((recipe) => (
              <DrinksItem
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

export default DrinksList;
