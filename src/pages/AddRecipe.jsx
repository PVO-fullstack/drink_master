// import React from 'react';
import { AddRecipeForm, FollowUs, PageTitle } from '../components';

export const AddRecipe = () => {
  return (
    <div>
      <PageTitle style={{ marginBottom: 40 }}>Add recipe</PageTitle>
      <AddRecipeForm />
      <FollowUs />
    </div>
  );
};
