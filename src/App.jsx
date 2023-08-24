import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Drinks } from "./pages/Drinks";
import { AddRecipe } from "./pages/AddRecipe";
import { MyRecipes } from "./pages/MyRecipes";
import { Favorites } from "./pages/Favorites";
import { Navigation } from "./components/Navigation/Navigation";

export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/addrecipe" element={<AddRecipe />} />
        <Route path="/myrecipes" element={<MyRecipes />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};
