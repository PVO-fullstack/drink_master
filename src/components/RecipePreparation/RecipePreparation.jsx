import React from "react";
import css from "./RecipePreparation.module.scss"


export const RecipePreparation = ({instructions}) => {

    return (
        <div className={css.preparation}>
            <h2 className={ css.prep_title} >Recipe Preparation</h2>
            {/* <img src="" alt="Coctails" /> */}
            <p>{instructions}</p>
        </div>
        
        
    )

}