import { RecipesList } from "../components";
// import { PageTitle } from "../components/Typography/PageTitle/PageTitle";
import css from "../components/RecipesList/RecipesList.module.scss";

export const Favorites = () => {
  return (
    <div className={css.container}>
      <h1 className={css.heading}>Favorites</h1>
      {/* <PageTitle>Favorites</PageTitle> */}
      <RecipesList type="favorite" />
    </div>
  );
};
