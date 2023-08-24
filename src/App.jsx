import { Navigation } from "./components/Navigation/Navigation";
import { UserRoutes } from "./UserRoutes";

export const App = () => {
  return (
    <div>
      <Navigation />
      <UserRoutes />
    </div>
  );
};
