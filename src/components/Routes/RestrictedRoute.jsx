import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { selectIsLoggedIn, selectIsRefresh } from "redux/auth/auth-selectors";

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  //   const isRefresh = useSelector(selectIsRefresh);
  //   const userIn = isLoggedIn && !isRefresh;
  //   return userIn ? <Navigate to={redirectTo} /> : Component;
};
