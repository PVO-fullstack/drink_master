import React from "react";
import { Route, Routes } from "react-router-dom";
import { Start } from "./pages/AuthPages/Start";
import { Registration } from "./pages/AuthPages/Registration";
import { SignIn } from "./pages/AuthPages/SignIn";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/welcome" element={<Start />} />
      <Route path="/signup" element={<Registration />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};
