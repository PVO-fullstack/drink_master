import { RecipesList } from "../components";
import { PageTitle } from "../components/Typography/PageTitle/PageTitle";
import css from "../components/RecipesList/RecipesList.module.scss";

export const Favorites = () => {
  return (
    <div className={css.container}>
      <PageTitle>Favorites</PageTitle>
      <RecipesList type="favorite" />
    </div>
  );
};
