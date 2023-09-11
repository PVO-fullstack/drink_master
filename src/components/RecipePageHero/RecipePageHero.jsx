import { useEffect, useState } from 'react';
import css from './RecipePageHero.module.scss';
import { PageTitle } from '../index.js';
import placeholder from '/images/RecipePlaceholder.png';
import { RecipeIngredientsList, RecipePreparation } from '../index.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectRecipe } from '../../redux/recipe/recipeSelector.js';
import {
  addToFavoriteThunk,
  fetchRecipeIdThunk,
} from '../../redux/recipe/recipeOperations.js';
import { FirstRecipe } from '../MotivationModals/FirstRecipe/FirstRecipe';
import { TenRecipes } from '../MotivationModals/TenRecipes/TenRecipes';

export const RecipePageHero = () => {
  const dispatch = useDispatch();
  const recipe = useSelector(selectRecipe);

  const [favorite, setFavorite] = useState(false);
  const [showModal, setShowModal] = useState({
    showModalFirstRecipe: false,
    showModalTenthRecipe: false,
  });

  const closeModal = () => {
    setShowModal({
      showModalFirstRecipe: false,
      showModalTenthRecipe: false,
    });
  };

  const currentURL = window.location.href;
  const parts = currentURL.split('/');
  const recipeId = parts[parts.length - 1];

  const handleAddToFavorite = () => {
    dispatch(addToFavoriteThunk(recipeId)).then((result) => {
      console.log(result.payload.showModalFavorite);
      setShowModal(result.payload.showModalFavorite);
    });
    setFavorite(!favorite);
  };

  useEffect(() => {
    dispatch(fetchRecipeIdThunk(recipeId)).then((result) => {
      setFavorite(result.payload.isFavorite);
    });
  }, [dispatch, recipeId]);

  return (
    <div className={css.page}>
      <div className={css.page_recipe}>
        <h3 className={css.glass}>{recipe.glass}</h3>
        <div className={css.recipe_list}>
          <div className={css.recipe}>
            <PageTitle className={css.recipe_title}>{recipe.drink}</PageTitle>
            {recipe.description !== '' && (
              <p className={css.description}>{recipe.description}</p>
            )}
            <button
              onClick={handleAddToFavorite}
              className={css.btn_add}
              type="button"
            >
              {!favorite ? 'Add to favorite recipe' : 'Remove from favorite'}
            </button>
          </div>
          {recipe.drinkThumb === '' ? (
            <img className={css.img} src={placeholder} alt="" />
          ) : (
            <img
              className={css.img}
              src={recipe.drinkThumb}
              alt={recipe.drink}
            />
          )}
        </div>
      </div>
      <RecipeIngredientsList ingredients={recipe.ingredients} />
      <RecipePreparation instructions={recipe.instructions} />
      {showModal.showModalFirstRecipe && <FirstRecipe close={closeModal} />}
      {showModal.showModalTenthRecipe && <TenRecipes close={closeModal} />}
    </div>
  );
};
