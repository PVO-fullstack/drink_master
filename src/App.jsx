import { useDispatch } from "react-redux";
import { UserRoutes } from "./UserRoutes";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/authOperations";
import { useState } from "react";

export const App = () => {
  const dispatch = useDispatch();

  const [isLogin, setisLogin] = useState(false);

  useEffect(() => {
    dispatch(refreshUser());
    setisLogin(true);
  }, [dispatch]);

  return <div>{isLogin && <UserRoutes />}</div>;
};
