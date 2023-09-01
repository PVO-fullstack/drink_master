import { Link } from "react-router-dom";
import { Button } from "../../Button/Button";
import css from "../OtherDrinksBtn/OtherDrinksBtn.module.scss";
const OtherDrinksBtn = () => {
  return (
    <div className={css.centeredButton}>
      <Link to="/drinks">
        <Button children="Other drinks" variant="otherDrinksBtn" />
      </Link>
    </div>
  );
};
export default OtherDrinksBtn;
