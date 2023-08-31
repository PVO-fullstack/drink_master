import { RecipesList } from "../components";
import { PageTitle } from "../components/Typography/PageTitle/PageTitle";

export const Favorites = () => {
  return (
    <div>
      <PageTitle>Favorites</PageTitle>
      <RecipesList type="favorite" />
    </div>
  );
};
