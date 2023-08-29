import React from "react";
import css from "./Drinks.module.scss";

const Drinks = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Drinks</h1>
      <input
        type="text"
        placeholder="Enter the text"
        className={css.searchDrinks}
      />
    </div>
  );
};

export default Drinks;
