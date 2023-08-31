import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { Drinks } from "./pages/Drinks";
import { AddRecipe } from "./pages/AddRecipe";
import { MyRecipes } from "./pages/MyRecipes";
import { Favorites } from "./pages/Favorites";
import { RecipePage } from "./pages/RecipePage";
import { Layout } from "./components/Layout/Layout";
import { RestrictedRoute } from "./components/Routes/RestrictedRoute";
import { Welcome } from "./pages/AuthPages/Welcome";
import { Registration } from "./pages/AuthPages/Registration";
import { Login } from "./pages/AuthPages/Login";
import { PrivatRoute } from "./components/Routes/PrivatRoute";
import { useSelector } from "react-redux";
import { selectIsRefresh } from "./redux/auth/authSelectors";
import { Recipe } from "./pages/Recipe";

export const UserRoutes = () => {
  const isRefresh = useSelector(selectIsRefresh);

  return isRefresh ? (
    "Refresh User"
  ) : (
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
            path="drinks"
            element={
              <PrivatRoute redirectTo="/welcome" component={<Drinks />} />
            }
          />
          <Route
            path="addrecipe"
            element={
              <PrivatRoute redirectTo="/welcome" component={<AddRecipe />} />
            }
          />
          <Route
            path="myrecipes"
            element={
              <PrivatRoute redirectTo="/welcome" component={<MyRecipes />} />
            }
          />
          <Route path="myrecipes/:recipesId" element={<Recipe />} />
          <Route
            path="favorites"
            element={
              <PrivatRoute redirectTo="/welcome" component={<Favorites />} />
            }
          />
          </Route>
          
          <Route
          path="/welcome"
          element={<RestrictedRoute redirectTo="/" component={<Welcome />} />}
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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
