import React, { useEffect } from "react";
// import css from "./RecipePageHero.module.scss";
import { PageTitle, Button } from "../index.js";
import { RecipeInngredientsList, RecipePreparation } from "../index.js";

import instance from "../../shared/api/instance";

export const RecipePageHero = () => {

    useEffect(() => {
        getRecipeId = async (recipeId) => {
            try {
                const { data } = await instance.get(`/recipe/:${recipeId}`);
                console.log(data);
                return data;
            
            } catch (error) {
                return error.message;
        };
}
    })
   

    return (
        <div>
            <p>Вид тари</p>
            <PageTitle>Назва коктелю</PageTitle>
            <p>Опис коктеля</p>
            <Button>Add to favorite recipe</Button>
            <img src="" alt="" />
            <RecipeInngredientsList/>
            <RecipePreparation />
        </div>
        
    )

};
