import { Layout } from './components/Layout/Layout';
import { UserRoutes } from './UserRoutes';

export const App = () => {
  return (
    <div>
      <Layout>
        <UserRoutes />
      </Layout>
    </div>
  );
};
