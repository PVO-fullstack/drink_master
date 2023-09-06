import React, { useState } from "react";
import css from "../DrinksPage/DrinksPage.module.scss";
import SearchForm from "../SearchForm/SearchForm";
import DropDownList from "../DropDownList/DropDownList";
import { PageTitle } from "../../Typography/PageTitle/PageTitle";
import DrinksList from "../DrinksLIst/DrinksLIst";

const DrinksPage = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  return (
    <div>
      <PageTitle children="Drinks" />
      <SearchForm searchText={searchText} setSearchText={setSearchText} />
      <DropDownList
        placeholder={"All categories"}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <DropDownList
        placeholder={"Ingredients"}
        selectedIngredient={selectedIngredient}
        setSelectedIngredient={setSelectedIngredient}
      />
      <DrinksList
        type="recipes"
        searchText={searchText}
        selectedCategory={selectedCategory}
        selectedIngredient={selectedIngredient}
      />
    </div>
  );
};

export default DrinksPage;
