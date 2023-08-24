// import { Link, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import { Drinks } from "./pages/Drinks";
// import { AddRecipe } from "./pages/AddRecipe";
// import { MyRecipes } from "./pages/MyRecipes";
// import { Favorites } from "./pages/Favorites";
import { Navigation } from "./components/Navigation/Navigation";
import { UserRoutes } from "./UserRoutes";

export const App = () => {
  return (
    <div>
      <Navigation />
      <UserRoutes />
    </div>
  );
};
