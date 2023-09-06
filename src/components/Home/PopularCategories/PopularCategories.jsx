import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipesByCategory } from "../../../redux/drinks/operationsDrinks";
import { memoizedSelectDrinksByCategory } from "../../../redux/drinks/selectorsDrinks";
import css from "../PopularCategories/PopularCategories.module.scss";
import { Link } from "react-router-dom";

const PopularCategories = () => {
  const categoriesToDisplay = [
    "Ordinary Drink",
    "Cocktail",
    "Shake",
    "Other/Unknown",
  ];
  const drinks = useSelector(memoizedSelectDrinksByCategory);

  const dispatch = useDispatch();
  const [cardsPerRow, setCardsPerRow] = useState(3);

  useEffect(() => {
    dispatch(fetchRecipesByCategory())
      .unwrap()
      .catch((e) => console.log("error: ", e));
  }, [dispatch]);

  useEffect(() => {
    const updateCardsPerRow = () => {
      if (window.innerWidth > 768) {
        setCardsPerRow(3);
      } else if (window.innerWidth > 375) {
        setCardsPerRow(2);
      } else {
        setCardsPerRow(1);
      }
    };

    updateCardsPerRow();

    window.addEventListener("resize", updateCardsPerRow);

    return () => {
      window.removeEventListener("resize", updateCardsPerRow);
    };
  }, []);

  return (
    <div>
      {categoriesToDisplay.map((categoryDrink) => {
        const categoryDrinks = drinks[categoryDrink] || [];
        return (
          <div key={categoryDrink}>
            <h2 className={css.nameCategory}>{categoryDrink}</h2>
            <ul className={css.cocktailList}>
              {categoryDrinks.slice(0, cardsPerRow).map((drink) => (
                <Link key={drink._id} to={`/recipes/${drink._id}`}>
                  <li key={drink.drink}>
                    <div className={css.imgContainer}>
                      <img
                        src={drink.drinkThumb}
                        alt={drink.drink}
                        className={css.imgCocktail}
                      />
                    </div>

                    <div className={css.nameAndIngridients}>
                      <p className={css.nameCocktail}>{drink.drink}</p>
                      <p className={css.ingredients}>Ingredients</p>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default PopularCategories;
