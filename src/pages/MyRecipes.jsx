import { RecipesList } from '../components';
import { PageTitle } from '../components/Typography/PageTitle/PageTitle';

export const MyRecipes = () => {
  return (
    <div>
      <PageTitle margin="large">MyRecipes</PageTitle>
      <RecipesList type="own" />
    </div>
  );
};
