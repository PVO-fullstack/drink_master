import { useState } from "react";
import { Layout } from "./components/Layout/Layout";
import { UserRoutes } from "./UserRoutes";
import { AuthRoutes } from "./AuthRoutes";
import { useSelector } from "react-redux";
import { isLogin } from "./redux/auth/authSelectors";

export const App = () => {
  const isLogin = useSelector((state) => state.auth.isLoggedIn);

  console.log("isLogin", isLogin);

  return (
    <div>
      {isLogin ? (
        <AuthRoutes />
      ) : (
        <Layout>
          <UserRoutes />
        </Layout>
      )}
    </div>
  );
};
