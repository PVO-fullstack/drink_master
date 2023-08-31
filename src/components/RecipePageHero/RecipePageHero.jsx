import React, { useEffect} from "react";
// import css from "./RecipePageHero.module.scss";
import { PageTitle, Button } from "../index.js";
import { RecipeInngredientsList, RecipePreparation } from "../index.js";
import { useDispatch, useSelector } from "react-redux";
import { selectRecipe } from "../../redux/recipe/recipeSelector.js";
import { fetchRecipIdThunk } from "../../redux/recipe/recipeOperations.js";


export const RecipePageHero = () => {
    const dispatch = useDispatch();
    const recipe = useSelector(selectRecipe);
    // console.log(recipe);
   
    
    const currentURL = window.location.href;
    const parts = currentURL.split('/');
    const recipeId = parts[parts.length - 1];


    useEffect(() => {
        dispatch(fetchRecipIdThunk(recipeId));
    }, [dispatch])
     
        console.log(recipe.ingredients);
    return (
        <div>
            <p>{recipe.glass}</p>
            <PageTitle>{recipe.drink}</PageTitle>
            <p>{recipe.description}</p>
            <Button>Add to favorite recipe</Button>
            <img src={recipe.drinkThumb} alt={recipe.drink} />
             <RecipeInngredientsList ingredients={ recipe.ingredients} />
            <RecipePreparation instructions={ recipe.instructions} />
        </div>
        
    )

};

 // const [searchParams, setSearchParams] = useSearchParams();
    // const recipeId = searchParams.get('recipesId') ?? '';
    // const params = useParams(); 
    // const recipeId = params._id;
    // console.log(recipeId)
