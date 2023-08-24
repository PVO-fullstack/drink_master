import { Layout } from "./components/Layout/Layout";
import { Navigation } from "./components/Navigation/Navigation";
import { UserRoutes } from "./UserRoutes";

export const App = () => {
  return (
    <div>
      <Layout>
        <UserRoutes />
      </Layout>
    </div>
  );
};
