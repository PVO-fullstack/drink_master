import React, { useState } from "react";
import css from "./SearchForm.module.scss";
import SearchSVG from "./SearchSVG";

const SearchForm = ({ setSearchText }) => {
  const [inputText, setInputText] = useState("");

  const handleSearch = () => {
    setSearchText(inputText);
    setInputText("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={css.containerInput}>
      <input
        type="text"
        placeholder="Enter the text"
        className={css.searchFormInput}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <div className={css.logoContainer} onClick={handleSearch}>
        <SearchSVG />
      </div>
    </div>
  );
};

export default SearchForm;
