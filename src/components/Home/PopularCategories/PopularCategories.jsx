import React, { useState, useEffect } from "react";
import instance from "../../../shared/api/instance";
import css from "../PopularCategories/PopularCategories.module.scss";

const PopularCategories = ({ categoryDrink }) => {
  const [drinksInCategory, setDrinksInCategory] = useState([]);
  const [cardsPerRow, setCardsPerRow] = useState(3);

  useEffect(() => {
    instance
      .get("/recipes/main-page")
      .then((res) => {
        const data = res.data;
        const drinks = data[categoryDrink];
        setDrinksInCategory(drinks);
      })
      .catch((error) => {
        console.error("Error fetching drinks:", error);
      });
  }, [categoryDrink]);

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
      <h2 className={css.nameCategory}>{categoryDrink}</h2>
      <ul className={css.cocktailList}>
        {drinksInCategory.slice(0, cardsPerRow).map((drink) => (
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
        ))}
      </ul>
    </div>
  );
};

export default PopularCategories;
