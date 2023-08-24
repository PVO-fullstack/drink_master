import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { selectIsLoggedIn, selectIsRefresh } from "redux/auth/auth-selectors";

export const PrivatRoute = ({ component: Component, redirectTo = "/" }) => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  //   const isRefresh = useSelector(selectIsRefresh);
  //   const shouldRedirect = !isLoggedIn && !isRefresh;
  //   return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
