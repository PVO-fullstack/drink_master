import PopularCategories from "../components/Home/PopularCategories/PopularCategories";
import Hero from "../components/Home/Hero/Hero";
import OtherDrinksBtn from "../components/Home/OtherDrinksBtn/OtherDrinksBtn";
const Home = () => {
  return (
    <div>
      <Hero />
      <PopularCategories categoryDrink="Ordinary Drink" />
      <PopularCategories categoryDrink="Cocktail" />
      <PopularCategories categoryDrink="Shake" />
      <PopularCategories categoryDrink="Other/Unknown" />
      <OtherDrinksBtn />
    </div>
  );
};

export default Home;
