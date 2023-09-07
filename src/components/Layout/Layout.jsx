import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router";
import { Suspense, useEffect, useRef, useState } from "react";

import style from "./Layout.module.scss";
import { Loader } from "../Loader/Loader";
import { useSelector } from "react-redux";
import { selectIsShowModals } from "../../redux/auth/authSelectors";
import { Motivation } from "../Motivation/Motivation";

const Layout = () => {
  const headerRef = useRef(null);
  const showModalTimeUsing = useSelector(selectIsShowModals);

  const [headerHeight, setHeaderHeight] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // *****************
  useEffect(() => {
    setShowModal(showModalTimeUsing);
    const header = headerRef.current;
    const { height } = header.getBoundingClientRect();
    setHeaderHeight(height);
    window.onscroll = () => {
      if (window.scrollY > headerHeight) {
        header.style.backgroundColor = "rgb(1, 1, 24, 0.50)";
        header.style.backdropFilter = "blur(10px)";
      } else {
        header.style.backgroundColor = "transparent";
        header.style.backdropFilter = "none";
      }
    };
  }, [headerHeight, showModalTimeUsing]);
  // *****************

  console.log("showModal", showModal);

  return (
    <div>
      {showModal && <Motivation />}
      <Header headerRef={headerRef} />
      <div className={style.container}>
        {/* <Suspense fallback={<Loader />}> */}
        <main className={style.page} style={{ marginTop: headerHeight }}>
          <Outlet />
        </main>
        {/* </Suspense> */}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
