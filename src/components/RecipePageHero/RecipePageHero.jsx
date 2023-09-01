import React, { useEffect} from "react";
import css from "./RecipePageHero.module.scss";
import { PageTitle, Button } from "../index.js";
import { RecipeInngredientsList, RecipePreparation } from "../index.js";
import { useDispatch, useSelector } from "react-redux";
import { selectRecipe } from "../../redux/recipe/recipeSelector.js";
import { fetchRecipIdThunk } from "../../redux/recipe/recipeOperations.js";


export const RecipePageHero = () => {
    const dispatch = useDispatch();
    const recipe = useSelector(selectRecipe);
    console.log(recipe);
   
    
    const currentURL = window.location.href;
    const parts = currentURL.split('/');
    const recipeId = parts[parts.length - 1];


    useEffect(() => {
        dispatch(fetchRecipIdThunk(recipeId));
    }, [dispatch])
     
        console.log(recipe.ingredients);
    return (
        <div className={css.page}>
            <p className={css.glass}>{recipe.glass}</p>
            <div className={css.recipe_page}>
                
                <div className={css.recipe}>
                    <PageTitle className={css.heading}>{recipe.drink}</PageTitle>
                    {recipe.description !== '' && (<p className={css.descrip}>{recipe.description}</p>)}
                    <button className={css.recipe_btn} type="button">Add to favorite recipe</button>
                    {/* <Button className={css.btn_recipe}>Add to favorite recipe</Button> */}
                </div>
                <img className={css.img} src={recipe.drinkThumb} alt={recipe.drink} />
            </div>
            <RecipeInngredientsList ingredients={ recipe.ingredients} />
            <RecipePreparation instructions={ recipe.instructions} />
        </div>
        
    )

};


