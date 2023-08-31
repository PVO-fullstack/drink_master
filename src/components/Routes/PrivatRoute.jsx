import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectToken } from "../../redux/auth/authSelectors";

export const PrivatRoute = ({ component: Component, redirectTo = "/" }) => {
  const token = useSelector(selectToken);
  const shouldRedirect = !token;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

PrivatRoute.propTypes = {
  component: PropTypes.node,
  redirectTo: PropTypes.node,
};
