import { Link } from "react-router-dom";
import { Button } from "../../Button/Button";
import css from "../OtherDrinksBtn/OtherDrinksBtn.module.scss";
const scrollToTop = () => {
  window.scrollTo(0, 0);
};
const OtherDrinksBtn = () => {
  return (
    <div className={css.centeredButton}>
      <Link to="/drinks">
        <Button
          children="Other drinks"
          variant="otherDrinksBtn"
          onClick={scrollToTop}
        />
      </Link>
    </div>
  );
};
export default OtherDrinksBtn;
