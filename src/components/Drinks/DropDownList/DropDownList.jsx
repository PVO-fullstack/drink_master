import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import {
  selectCategories,
  selectIngredients,
} from "../../../redux/preparation/selectors";
import {
  fetchCategories,
  fetchIngredients,
} from "../../../redux/preparation/operations";
import { makeStyles } from "../DropDownList/styles";

const DropDownList = ({
  placeholder,
  selectedCategory,
  setSelectedCategory,
  selectedIngredient,
  setSelectedIngredient,
  props,
}) => {
  const categories = useSelector(selectCategories);
  const ingridients = useSelector(selectIngredients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories())
      .unwrap()
      .catch((e) => console.log("error: ", e));
    dispatch(fetchIngredients())
      .unwrap()
      .catch((e) => console.log("error: ", e));
  }, [dispatch]);

  const categoryOptions = categories.map((data) => ({
    label: data.name,
    value: data.name,
  }));

  const ingredientOptions = ingridients.map((data) => ({
    label: data.title,
    value: data.title,
  }));

  const styles = makeStyles({ style: props });

  return (
    <div>
      <Select
        placeholder={placeholder}
        styles={styles}
        options={
          placeholder === "All categories" ? categoryOptions : ingredientOptions
        }
        onChange={(selectedOption) => {
          if (placeholder === "All categories") {
            setSelectedCategory(selectedOption.value);
          } else if (placeholder === "Ingredients") {
            setSelectedIngredient(selectedOption.value);
          }
        }}
        value={
          placeholder === "All categories"
            ? categoryOptions.find(
                (option) => option.value === selectedCategory
              )
            : ingredientOptions.find(
                (option) => option.value === selectedIngredient
              )
        }
      />
    </div>
  );
};

// const tablet = `@media screen and (min-width: ${sizes.tablet})`;
// const desktop = `@media screen and (min-width: ${sizes.desktop})`;

// const ingredientStyleOverride = {
//   control: {
//     padding: "16px 18px",
//     [tablet]: { padding: "14px 24px" },
//   },
//   container: {
//     minWidth: 101,
//     [tablet]: { width: 316 },
//     [desktop]: { width: 332 },
//   },
// };

export default DropDownList;
