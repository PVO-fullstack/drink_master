import React from "react";
import PropTypes from "prop-types";
// import css from "/RecipeInngredientsList.module.scss";

export const RecipeInngredientsList = ({ingredients}) => {

    return (
        <div>
            <h3>Ingredients</h3>
            <ul>
                {ingredients.map(({title, measure, thumb_small}) => {
                    <li>
                        <img src={thumb_small} alt="Coctail" />
                        <p>{title} {measure}</p>
                    </li>
                    
                })
                   }
            </ul>
        </div>
    )
}

RecipeInngredientsList.PropTypes = {
     array: PropTypes.arrayOf(
        PropTypes.exact({
            title: PropTypes.string.isRequired,
            imeasure: PropTypes.number.isRequired,
            thumb_small: PropTypes.number.isRequired,
        }))
}