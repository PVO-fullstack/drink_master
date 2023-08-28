import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  selectIsLoggedIn,
  selectIsRefresh,
} from "../../redux/auth/authSelectors";

export const PrivatRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefresh = useSelector(selectIsRefresh);
  const shouldRedirect = !isLoggedIn && !isRefresh;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

PrivatRoute.propTypes = {
  component: PropTypes.node,
  redirectTo: PropTypes.node,
};
