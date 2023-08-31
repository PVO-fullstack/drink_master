import { RecipesList } from "../components";
import { PageTitle } from "../components/Typography/PageTitle/PageTitle";

export const MyRecipes = () => {
  return (
    <div>
      <PageTitle>MyRecipes</PageTitle>
      <RecipesList type="own" />
    </div>
  );
};
