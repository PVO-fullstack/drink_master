import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { RestrictedRoute } from "./components/Routes/RestrictedRoute";
import { PrivatRoute } from "./components/Routes/PrivatRoute";
import Home from "./pages/Home";
import Drinks from "./pages/Drinks";
import MyRecipes from "./pages/MyRecipes";
import Recipe from "./pages/Recipe";
import Favorites from "./pages/Favorites";
const AddRecipePage = lazy(() => import("./pages/AddRecipe"));
const WelcomePage = lazy(() => import("./pages/AuthPages/Welcome"));
const RegistrationPage = lazy(() => import("./pages/AuthPages/Registration"));
const LoginPage = lazy(() => import("./pages/AuthPages/Login"));
const ErrorPage = lazy(() => import("./pages/404"));
import { Toaster } from "react-hot-toast";
import { toastOptions, containerStyle } from "./services/toastOptions";
import { Loader, Spiner } from "./components/Loader/Loader";
export const UserRoutes = () => {
  return (
    <>
      {/* <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}> */}

      <Suspense fallback={<Loader />}>
        <Toaster containerStyle={containerStyle} toastOptions={toastOptions} />

        <Routes>
          <Route
            path="/"
            element={
              <PrivatRoute redirectTo="/welcome" component={<Layout />} />
            }
          >
            <Route
              index
              element={
                <PrivatRoute redirectTo="/welcome" component={<Home />} />
              }
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
                <PrivatRoute
                  redirectTo="/welcome"
                  component={<AddRecipePage />}
                />
              }
            />
            <Route
              path="myrecipes"
              element={
                <PrivatRoute redirectTo="/welcome" component={<MyRecipes />} />
              }
            />
            <Route
              path="recipes/:id"
              element={
                <PrivatRoute redirectTo="/welcome" component={<Recipe />} />
              }
            />
            <Route
              path="favorites"
              element={
                <PrivatRoute redirectTo="/welcome" component={<Favorites />} />
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Route>

          <Route
            path="/welcome"
            element={
              <RestrictedRoute redirectTo="/" component={<WelcomePage />} />
            }
          />
          <Route
            path="/signup"
            element={
              <RestrictedRoute
                redirectTo="/"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <RestrictedRoute redirectTo="/" component={<LoginPage />} />
            }
          />
        </Routes>
      </Suspense>
      {/* </ThemeProvider> */}
    </>
  );
};
