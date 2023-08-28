import { RecipesList } from "../components";
import { PageTitle } from "../components/Typography/PageTitle/PageTitle";
// import { selectMyRecipes } from "../redux/cockteil/cockteilsSelectors";
// import { useSelector } from "react-redux";

export const MyRecipes = () => {
  // const recipe = useSelector(selectMyRecipes);
  // console.log("selector", recipe);

  return (
    <div>
      <PageTitle>MyRecipes</PageTitle>
      <RecipesList type="myRecipes" />
    </div>
  );
};
