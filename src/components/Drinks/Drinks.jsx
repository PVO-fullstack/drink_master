import React from "react";
import { PageTitle } from "../Typography";
import PopularCategories from "../Home/PopularCategories/PopularCategories";
import SearchForm from "./SearchForm/SearchForm";
import DropDownList from "./DropDownList/DropDownList";

export const DrinksComponent = () => {
  return (
    <div>
      <PageTitle>Drinks</PageTitle>
      <SearchForm />
    </div>
  );
};
