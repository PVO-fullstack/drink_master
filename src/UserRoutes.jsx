import React from "react";
import { AppBar } from "./components/AppBar/AppBar";
import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { Drinks } from "./pages/Drinks";
import { AddRecipe } from "./pages/AddRecipe";

export const UserRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/addrecipe" element={<AddRecipe />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
};
