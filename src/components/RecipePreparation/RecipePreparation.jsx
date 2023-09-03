import React from "react";
import PropTypes from "prop-types";
import css from "./RecipePreparation.module.scss"

export const RecipePreparation = ({instructions}) => {

    return (
        <div className={css.preparation}>
            <h2 className={ css.prep_title} >Recipe Preparation</h2>
            <div className={css.prep}>
                <img className={ css.prep_img} src="../public/recipePrep.jpg" alt="Coctails" />
            
                <ul className={css.prep_list}>               
                    {instructions.map(item => (
                        <li className={css.prep_item}>
                            {instructions.length > 1 && <span className={css.marker}></span>}{item}
                        </li>
                    ))
                    }
                    </ul>
            </div>
        </div>
        
        
    )

}

RecipePreparation.PropTypes = {
    instructions: PropTypes.array.isRequired
}