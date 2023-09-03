import React from "react";
import { PageTitle } from "../components/Typography/PageTitle/PageTitle";
import SearchForm from "../components/Drinks/SearchForm/SearchForm";

export const Drinks = () => {
  return (
    <div>
      <PageTitle children="Drinks" />
      <SearchForm />
    </div>
  );
};
