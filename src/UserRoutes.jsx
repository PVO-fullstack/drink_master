import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { RestrictedRoute } from "./components/Routes/RestrictedRoute";
import { PrivatRoute } from "./components/Routes/PrivatRoute";
import { useSelector } from "react-redux";
import { selectIsRefresh } from "./redux/auth/authSelectors";
const HomePage = lazy(() => import("./pages/Home"));
const DrinksPage = lazy(() => import("./pages/Drinks"));
const AddRecipePage = lazy(() => import("./pages/AddRecipe"));
const MyRecipesPage = lazy(() => import("./pages/MyRecipes"));
const FavoritesPage = lazy(() => import("./pages/Favorites"));
const WelcomePage = lazy(() => import("./pages/AuthPages/Welcome"));
const RegistrationPage = lazy(() => import("./pages/AuthPages/Registration"));
const LoginPage = lazy(() => import("./pages/AuthPages/Login"));
const RecipePage = lazy(() => import("./pages/Recipe"));
const ErrorPage = lazy(() => import("./pages/404"));
import { Toaster } from "react-hot-toast";
import { toastOptions, containerStyle } from "./services/toastOptions";
// import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Loader, Spiner } from "./components/Loader/Loader";

export const UserRoutes = () => {
  const isRefresh = useSelector(selectIsRefresh);

  return isRefresh ? (
    <Spiner />
  ) : (
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
                <PrivatRoute redirectTo="/welcome" component={<HomePage />} />
              }
            />
            <Route
              path="drinks"
              element={
                <PrivatRoute redirectTo="/welcome" component={<DrinksPage />} />
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
                <PrivatRoute
                  redirectTo="/welcome"
                  component={<MyRecipesPage />}
                />
              }
            />
            <Route
              path="recipes/:id"
              element={
                <PrivatRoute redirectTo="/welcome" component={<RecipePage />} />
              }
            />
            <Route
              path="favorites"
              element={
                <PrivatRoute
                  redirectTo="/welcome"
                  component={<FavoritesPage />}
                />
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
