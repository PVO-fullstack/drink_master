import React from "react";
import { Route, Routes } from "react-router-dom";
import { Start } from "./pages/AuthPages/Start";
import { Registration } from "./pages/AuthPages/Registration";
import { Login } from "./pages/AuthPages/Login";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/welcome" element={<Start />} />
      <Route path="/signup" element={<Registration />} />
      <Route path="/signin" element={<Login />} />
    </Routes>
  );
};
