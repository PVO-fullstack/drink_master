import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";

export const PrivatRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLogin = useSelector(selectIsLoggedIn);

  const shouldRedirect = !isLogin;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

PrivatRoute.propTypes = {
  component: PropTypes.node,
  redirectTo: PropTypes.node,
};
