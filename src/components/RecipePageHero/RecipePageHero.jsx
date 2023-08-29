import React from "react";
// import css from "./RecipePageHero.module.scss";
import { PageTitle, Button } from "../index.js";

export const RecipePageHero = () => {

    return (
        <div>
            <p>Вид тари</p>
            <PageTitle>Назва коктелю</PageTitle>
            <p>Опис коктеля</p>
            <Button>Add to favorite recipe</Button>
            <img src="" alt="" />
        </div>
        
    )

}