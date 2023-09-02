// import React from 'react';
import { useDispatch } from 'react-redux';
import { AddRecipeForm, FollowUs, PageTitle } from '../components';
import { PopularRecipes } from '../components/PopularRecipes/PopularRecipes';

import style from './AddRecipe.module.scss';
import { useEffect } from 'react';
import {
  fetchCategories,
  fetchGlasses,
  fetchIngredients,
} from '../redux/preparation/operations';

export const AddRecipe = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients())
      .unwrap()
      .catch((error) => console.log('error: ', error));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategories())
      .unwrap()
      .catch((e) => console.error('error: ', e));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchGlasses())
      .unwrap()
      .catch((e) => console.error('error: ', e));
  }, [dispatch]);

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
