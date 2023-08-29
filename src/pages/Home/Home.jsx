import PopularCategories from "../../components/PopularCategories/PopularCategories";
import css from "./Home.module.scss";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={css.container}>
      <h1 className={css.heroTitle}>
        Craft Your Perfect Drink with Drink Master
      </h1>
      <p className={css.heroInfo}>
        Unlock your inner mixologist with Drink Master, your one-stop
        destination for exploring, crafting, and mastering the world's finest
        beverages.
      </p>
      <Link to="/addrecipe">
        <Button children="Add recipe" className={css.heroBtn} />
      </Link>

      <PopularCategories categoryDrink="Ordinary Drink" />
      <PopularCategories categoryDrink="Cocktail" />
      <PopularCategories categoryDrink="Shake" />
      <PopularCategories categoryDrink="Other/Unknown" />
      <div className={css.centeredButton}>
        <Link to="/drinks">
          <Button children="Other drinks" className={css.otherDrinksBtn} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
