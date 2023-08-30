import PropTypes from "prop-types";
import { Header } from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";
import style from "./Layout.module.scss";

export const Layout = () => {
  return (
    <div>
      <Header />
      <main className={style.pagePadding}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
