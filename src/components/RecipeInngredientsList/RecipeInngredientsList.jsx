import React from "react";
import PropTypes from "prop-types";
import css from "./RecipeInngredientsList.module.scss";

export const RecipeInngredientsList = ({ingredients}) => {
    
    return (
        <div>
            <h3 className={css.indr_title}>Ingredients</h3>
            <ul className={css.indr_list}>
                {ingredients.map(({title, measure, ingredientThumb}) => (
                    <li className={css.ingr_item}>
                        <img className={ css.img} src={ingredientThumb} alt="Coctail" />
                    <div className={css.ingr_text}>
                            <p className={css.ingr_name}>{title}</p>
                            <p className={css.ingr_measure}>{measure}</p>
                    </div>
                    </li>
                    
                ))
                }
            </ul>
        </div>
    )
}

RecipeInngredientsList.PropTypes = {
     array: PropTypes.arrayOf(
        PropTypes.exact({
            title: PropTypes.string.isRequired,
            measure: PropTypes.string.isRequired,
            thumb_small: PropTypes.string.isRequired,
        }))
}