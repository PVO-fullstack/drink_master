import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Drinks } from "./pages/Drinks";
import { AddRecipe } from "./pages/AddRecipe";
import { MyRecipes } from "./pages/MyRecipes";
import { Favorites } from "./pages/Favorites";

export const UserRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/addrecipe" element={<AddRecipe />} />
        <Route path="/myrecipes" element={<MyRecipes />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
};
