import { RecipesList } from "../components";
import { PageTitle } from "../components/Typography/PageTitle/PageTitle";
import css from "../components/RecipesList/RecipesList.module.scss";

export const MyRecipes = () => {
  return (
    <div className={css.container}>
      <PageTitle>MyRecipes</PageTitle>
      <RecipesList type="own" />
    </div>
  );
};
