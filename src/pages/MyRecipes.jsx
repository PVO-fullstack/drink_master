import { RecipesList } from "../components";
// import { PageTitle } from "../components/Typography/PageTitle/PageTitle";
import css from "../components/RecipesList/RecipesList.module.scss";

const MyRecipes = () => {
  return (
    <div className={css.container}>
      <h1 className={css.heading}>MyRecipes</h1>
      {/* <PageTitle>MyRecipes</PageTitle> */}
      <RecipesList type="own" />
    </div>
  );
};

export default MyRecipes;
