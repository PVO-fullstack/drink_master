// import React from 'react';
// import PageTitle from '../components/Typography/PageTitle/PageTitle';
import { Button } from '../components/Button/Button';
import { AddRecipeForm } from '../components/AddRecipeForm/AddRecipeForm';
import { FollowUs } from '../components/FollowUs/FollowUs';

export const AddRecipe = () => {
  return (
    <div>
      {/* <PageTitle>Add recipe</PageTitle> */}
      <Button variant="accented">Add</Button>
      <AddRecipeForm />

      <FollowUs />
    </div>
  );
};
