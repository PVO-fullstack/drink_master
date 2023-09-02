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
    //     console.log(recipe.drinkThumb);
    // console.log(recipe.instructions);
    // console.log(recipe.isFavorite);
    return (
        <div className={css.page}>
            <div className={css.page_recipe}>
                <p className={css.glass}>{recipe.glass}</p>
                <div className={css.recipe_list}>
                    
                    <div className={css.recipe}>
                        <PageTitle className={css.recipe_title}>{recipe.drink}</PageTitle>
                        {recipe.description !== '' && (<p className={css.descrip}>{recipe.description}</p>)}
                        {recipe.isFavorite === false ? (<button className={css.btn_add} type="button">Add to favorite recipe</button>):(<button className={css.btn_remove} type="button">Remove from favorite</button>)}
                                    
                    </div>
                    {recipe.drinkThumb === '' ? ( <img src="public/images/placeholders/placeholder400.jpg" alt="" /> ) : ( <img className={css.img} src={recipe.drinkThumb} alt={recipe.drink} />)}
                </div>
            </div>
                <RecipeInngredientsList ingredients={ recipe.ingredients} />
                <RecipePreparation instructions={recipe.instructions} />
            
        </div>
        
    )

};


