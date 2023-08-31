import React, { useEffect} from "react";
import { PageTitle } from "../components/Typography/PageTitle/PageTitle";
import { RecipePageHero } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { selectRecipe } from "../redux/recipe/recipeSelector.js";
import { fetchRecipIdThunk } from "../redux/recipe/recipeOperations";
import { useParams } from "react-router-dom";


export const RecipePage = () => {
    const dispatch = useDispatch();
    const recipe = useSelector(selectRecipe);
    const { recipeId } = useParams();



    useEffect(() => {
        dispatch(fetchRecipIdThunk(recipeId));
    }, [dispatch])
    
   
    return (
        <div>
            <PageTitle>{recipe.drink}</PageTitle>
            {/* <RecipePageHero/> */}
            
            
        </div>
    );
};

