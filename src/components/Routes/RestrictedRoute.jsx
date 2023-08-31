import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  selectIsLoggedIn,
  selectIsRefresh,
} from "../../redux/auth/authSelectors";

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefresh = useSelector(selectIsRefresh);
  const userIn = isLoggedIn;
  return userIn ? <Navigate to={redirectTo} /> : Component;
};

RestrictedRoute.propTypes = {
  component: PropTypes.node,
  redirectTo: PropTypes.node,
};
