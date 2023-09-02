// import React from 'react';
import { AddRecipeForm, FollowUs, PageTitle } from '../components';
import { PopularRecipes } from '../components/PopularRecipes/PopularRecipes';

import style from './AddRecipe.module.scss';

export const AddRecipe = () => {
  return (
    <>
      <PageTitle margin="large">Add recipe</PageTitle>

      <div className={style.tierOne}>
        <AddRecipeForm />

        <div className={style.tierTwo}>
          <FollowUs />
          <PopularRecipes />
        </div>
      </div>
    </>
  );
};
