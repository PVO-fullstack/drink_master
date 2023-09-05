import { useState } from 'react';
import { Navigation } from '../Navigation/Navigation';
import PropTypes from 'prop-types';

import UserMenu from '../UserMenu/UserMenu';
import Logo from '../Logo/Logo';
import AlignJustify from '../ComponentsSVG/AlignJustify';
import CloseSVG from '../ComponentsSVG/CloseSVG';

import css from './Header.module.scss';

export const Header = ({ headerRef }) => {
  const [BurgerNavigation, setBurgerNavigation] = useState(false);
  const toggleBurgerBackdrop = (e) => {
    setBurgerNavigation(!BurgerNavigation);
    document.body.classList.toggle('Noowerflow')
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  };

  const burgerPosition = BurgerNavigation ? '0px' : '-100vh';

  return (
    <header className={css.header} ref={headerRef}>
      <div className={css.headerContainer}>
        <Logo />
        <Navigation style="csshead" callback={
          () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        } />
        <div className={css.headerSideWrapper}>
          <UserMenu />
          <button
            onClick={toggleBurgerBackdrop}
            className={css.headerBurgerMenuBTN}
          >
            {BurgerNavigation ? (
              <CloseSVG className={`headerBurgerMenuIcon`} fill={'#F3F3F3'} />
            ) : (
              <AlignJustify
                className={`headerBurgerMenuIcon`}
                fill={'#F3F3F3'}
              />
            )}
          </button>
        </div>
      </div>
      <div className={css.headerBurgerBackdrop} style={{ top: burgerPosition }} >
        <Navigation style="cssBurger" callback={toggleBurgerBackdrop} />
      </div>
      <div className={css.headerUnderline}></div>
    </header>
  );
};

Header.propTypes = {
  headerRef: PropTypes.object,
};
