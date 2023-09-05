import css from "../DrinksPage/DrinksPage.module.scss";
import SearchForm from "../SearchForm/SearchForm";
import DropDownList from "../DropDownList/DropDownList";
import { PageTitle } from "../../Typography/PageTitle/PageTitle";
import DrinksList from "../DrinksLIst/DrinksLIst";

const DrinksPage = () => {
  return (
    <div>
      <PageTitle children="Drinks" />
      <SearchForm />
      <DropDownList placeholder={"All categories"} />
      <DropDownList placeholder={"Ingredients"} />
      <DrinksList type="recipes" />
    </div>
  );
};
export default DrinksPage;
