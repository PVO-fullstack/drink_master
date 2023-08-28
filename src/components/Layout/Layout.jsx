import PropTypes from "prop-types";
import { Header } from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
