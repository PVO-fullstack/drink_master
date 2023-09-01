import React from "react";
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
                        {item}
                    </li>
                ))
                }
                </ul>
            </div>
        </div>
        
        
    )

}