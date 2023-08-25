import { useState } from "react";
import { Layout } from "./components/Layout/Layout";
import { UserRoutes } from "./UserRoutes";
import { AuthRoutes } from "./AuthRoutes";

export const App = () => {
  const [isLogin, setIsLogin] = useState(false);

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
