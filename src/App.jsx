import { useDispatch } from "react-redux";
import { UserRoutes } from "./UserRoutes";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/authOperations";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <UserRoutes />
    </div>
  );
};
