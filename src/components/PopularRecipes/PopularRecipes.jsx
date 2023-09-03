// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { SubTitle } from "../Typography";

import { PopularCard } from "./PopularCard/PopularCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularRecipes } from "../../redux/preparation/operations";
import { selectPopularRecipes } from "../../redux/preparation/selectors";

import style from "./PopularRecipes.module.scss";

// ################################################

export const PopularRecipes = () => {
  //
  const recipes = useSelector(selectPopularRecipes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularRecipes())
      .unwrap()
      .catch((e) => console.log("error: ", e));
  }, [dispatch]);

  return (
    <div className={style.cardsWrapper}>
      <SubTitle className={style.heading}>Popular recipes</SubTitle>

      <div>
        {recipes && (
          <ul className={style.cardsWrapper}>
            {recipes.map((item) => (
              <li key={item._id}>
                <PopularCard recipe={item} />
              </li>
            ))}
          </ul>
        )}

        {!recipes && <div>No recipes</div>}
      </div>
    </div>
  );
};
