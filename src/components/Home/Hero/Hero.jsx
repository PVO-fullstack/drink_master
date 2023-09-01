import { Link } from "react-router-dom";
import HeroTitle from "../HeroTitle/HeroTitle";
import HeroInfo from "../HeroInfo/HeroInfo";
import { Button } from "../../Button/Button";
import css from "../Hero/Hero.module.scss";

const Hero = () => {
  return (
    <div className={css.container}>
      <HeroTitle />
      <HeroInfo />
      <Link to="/addrecipe">
        <Button children="Add recipe" variant="heroBtn" />
      </Link>
    </div>
  );
};
export default Hero;
