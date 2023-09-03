import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Outlet } from 'react-router';
import { Suspense, useEffect, useRef, useState } from 'react';

import style from './Layout.module.scss';

export const Layout = () => {
  const headerRef = useRef(null);

  const [headerHeight, setHeaderHeight] = useState(null);

  // *****************
  useEffect(() => {
    const header = headerRef.current;
    const { height } = header.getBoundingClientRect();
    setHeaderHeight(height);
    window.onscroll = () => {
      if (window.scrollY > headerHeight) {
        header.style.backgroundColor = 'rgb(1, 1, 24, 0.50)';
        header.style.backdropFilter = 'blur(10px)';
      } else {
        header.style.backgroundColor = 'transparent';
        header.style.backdropFilter = 'none';
      }
    };
  }, [headerHeight]);
  // *****************

  return (
    <div>
      <Header headerRef={headerRef} />
      <div className={style.container}>
        <Suspense fallback={<div>Loading...</div>}>
          <main className={style.page} style={{ marginTop: headerHeight }}>
            <Outlet />
          </main>
        </Suspense>
      </div>

      <Footer />
    </div>
  );
};
