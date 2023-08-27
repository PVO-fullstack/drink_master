import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Drinks } from "./pages/Drinks";
import { AddRecipe } from "./pages/AddRecipe";
import { MyRecipes } from "./pages/MyRecipes";
import { Favorites } from "./pages/Favorites";
import { Layout } from "./components/Layout/Layout";
import { RestrictedRoute } from "./components/Routes/RestrictedRoute";
import { Start } from "./pages/AuthPages/Start";
import { Registration } from "./pages/AuthPages/Registration";
import { Login } from "./pages/AuthPages/Login";
import { PrivatRoute } from "./components/Routes/PrivatRoute";

export const UserRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<PrivatRoute redirectTo="/welcome" component={<Layout />} />}
        >
          <Route
            index
            element={<PrivatRoute redirectTo="/welcome" component={<Home />} />}
          />
          <Route
            path="/drinks"
            element={
              <PrivatRoute redirectTo="/welcome" component={<Drinks />} />
            }
          />
          <Route
            path="/addrecipe"
            element={
              <PrivatRoute redirectTo="/welcome" component={<AddRecipe />} />
            }
          />
          <Route
            path="/myrecipes"
            element={
              <PrivatRoute redirectTo="/welcome" component={<MyRecipes />} />
            }
          />
          <Route
            path="/favorites"
            element={
              <PrivatRoute redirectTo="/welcome" component={<Favorites />} />
            }
          />
        </Route>
        <Route
          path="/welcome"
          element={<RestrictedRoute redirectTo="/" component={<Start />} />}
        />
        <Route
          path="/signup"
          element={
            <RestrictedRoute redirectTo="/" component={<Registration />} />
          }
        />
        <Route
          path="/signin"
          element={<RestrictedRoute redirectTo="/" component={<Login />} />}
        />
      </Routes>
    </>
  );
};
