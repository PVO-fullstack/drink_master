import PropTypes from "prop-types";
import css from "./DrinksLIst.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DrinksItem } from "../DrinksItem/DrinksItem";
import { memoizedSelectAllRecipes } from "../../../redux/drinks/selectorsDrinks";
import { fetchAllRecipesThunk } from "../../../redux/drinks/operationsDrinks";
import Paginator from "../../Paginator/Paginator";

const determineRecipesPerPage = () => {
  if (window.innerWidth <= 375) {
    return 10; // Для мобільного
  } else if (window.innerWidth >= 768 && window.innerWidth <= 1439) {
    return 8; // Для планшета
  } else {
    return 9; // Для десктопу
  }
};

const DrinksLIst = ({ type }) => {
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
        fetchAllRecipesThunk({ type, page: currentPage, limit: recipesPerPage })
      );
    }
  }, [dispatch, currentPage, recipesPerPage, type]);

  const calculateTotalPages = (totalRecipes, recipesPerPage) => {
    return Math.ceil(totalRecipes / recipesPerPage);
  };

  return (
    <>
      <ul className={css.recipes_list}>
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
  );
};
export default DrinksLIst;

DrinksLIst.propTypes = {
  type: PropTypes.oneOf(["recipes"]).isRequired,
};
