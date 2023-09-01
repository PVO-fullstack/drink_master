// import React from 'react';
import { AddRecipeForm, FollowUs, PageTitle } from '../components';

export const AddRecipe = () => {
  return (
    <div>
      <PageTitle margin="large">Add recipe</PageTitle>
      <AddRecipeForm />
      <FollowUs />
    </div>
  );
};
