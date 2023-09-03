import { Header } from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';
// import { Suspense } from 'react';

import style from './Layout.module.scss';

export const Layout = () => {
  return (
    <div>
      <Header />

      <div className={style.container}>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <main className={style.page}>
          <Outlet />
        </main>
        {/* </Suspense> */}
      </div>

      <Footer />
    </div>
  );
};
