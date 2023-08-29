import React from "react";


export const RecipePreparation = ({instructions, imagesPreperation}) => {

    return (
        <div>
            <h3>Recipe Preparation</h3>
            <img src={imagesPreperation} alt="Coctails" />
            <p>{instructions}</p>
        </div>
        
        
    )

}