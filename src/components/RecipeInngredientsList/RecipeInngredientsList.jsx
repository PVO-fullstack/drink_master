import React from "react";
// import css from "/RecipeInngredientsList.module.scss";

export const RecipeInngredientsList = ({ingredients}) => {

    return (
        <div>
            <h3>Ingredients</h3>
            <ul>
                {ingredients.map(({id, title, measure, thumb_small}) => {
                    <li key={id}>
                        <img src={thumb_small} alt="Coctail" />
                        <p>{title} {measure}</p>
                    </li>
                    
                })
                   }
            </ul>
        </div>
    )
}