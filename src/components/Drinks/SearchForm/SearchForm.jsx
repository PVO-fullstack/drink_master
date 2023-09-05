import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import css from "../SearchForm/SearchForm.module.scss";
import SearchSVG from "./SearchSVG";

import { selectRecipesForName } from "../../../redux/drinks/selectorsDrinks";
import { fetchRecipesForNameThunk } from "../../../redux/drinks/operationsDrinks";

const SearchForm = () => {
  const drinks = useSelector(selectRecipesForName);
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput);
  useEffect(() => {
    const searchQuery = { drink: searchInput };
    dispatch(fetchRecipesForNameThunk(searchQuery))
      .unwrap()
      .catch((e) => console.log("error: ", e));
  }, [dispatch, searchInput]);
  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className={css.containerInput}>
      <input
        type="text"
        placeholder="Enter the text"
        className={css.searchFormInput}
        value={searchInput}
        onChange={handleInputChange}
      />
      <div className={css.logoContainer}>
        <SearchSVG />
      </div>
    </div>
  );
};

export default SearchForm;
