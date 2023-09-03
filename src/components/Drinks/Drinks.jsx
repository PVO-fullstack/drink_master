import React from "react";
import { PageTitle } from "../Typography";
import PopularCategories from "../Home/PopularCategories/PopularCategories";

export const DrinksComponent = () => {
  return (
    <div>
      <PageTitle>Drinks</PageTitle>
      <PopularCategories categoryDrink="Ordinary Drink" />
      <PopularCategories categoryDrink="Cocktail" />
      <PopularCategories categoryDrink="Shake" />
      <PopularCategories categoryDrink="Other/Unknown" />
    </div>
  );
};
