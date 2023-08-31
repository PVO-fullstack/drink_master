import { RecipesList } from "../components";
import { PageTitle } from "../components/Typography/PageTitle/PageTitle";

export const MyRecipes = () => {
  const width = window.screen.width;
  console.log(width);

  return (
    <div>
      <PageTitle>MyRecipes</PageTitle>
      <RecipesList type="own" />
      {/* змінити type на recipes  */}
    </div>
  );
};
