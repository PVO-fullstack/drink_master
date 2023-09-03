import css from "../SearchForm/SearchForm.module.scss";
import SearchSVG from "./SearchSVG";
import Select from "react-select";
import DropDownList from "../DropDownList/DropDownList";

const SearchForm = () => {
  return (
    <div>
      <div className={css.containerInput}>
        <input
          type="text"
          placeholder="Enter the text"
          className={css.searchFormInput}
        />
        <div className={css.logoContainer}>
          <SearchSVG />
        </div>
      </div>
      <DropDownList />
    </div>
  );
};
export default SearchForm;
