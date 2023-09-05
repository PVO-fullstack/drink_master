import Select from "react-select";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "../DropDownList/DropDownList.module.scss";

import {
  selectCategories,
  selectIngredients,
} from "../../../redux/preparation/selectors";
import {
  fetchCategories,
  fetchIngredients,
} from "../../../redux/preparation/operations";

const DropDownList = ({ placeholder }) => {
  const categories = useSelector(selectCategories);
  const ingridients = useSelector(selectIngredients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories())
      .unwrap()
      .catch((e) => console.log("error: ", e));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchIngredients())
      .unwrap()
      .catch((e) => console.log("error: ", e));
  }, [dispatch]);

  const category = categories.map((data) => ({
    label: data.name,
  }));

  const ingridient = ingridients.map((data) => ({
    label: data.title,
  }));

  if (placeholder === "All categories") {
    return (
      <div>
        <Select placeholder={placeholder} options={category} />
      </div>
    );
  } else if (placeholder === "Ingredients") {
    return (
      <div>
        <Select placeholder={placeholder} options={ingridient} />
      </div>
    );
  }
};

export default DropDownList;
