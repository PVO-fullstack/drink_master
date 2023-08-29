import React from "react";
import { RecipePageHero } from "../components/RecipePageHero/RecipePageHero";
import { RecipeInngredientsList } from "../components/RecipeInngredientsList/RecipeInngredientsList";
import { RecipePreparation } from "../components/RecipePreparation/RecipePreparation";

export const RecipePage = () => {
    return (
        <div>
            <RecipePageHero />
            <RecipeInngredientsList />
            <RecipePreparation/>
        </div>
    );
};