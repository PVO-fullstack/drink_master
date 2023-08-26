import React from 'react'
import css from './Footer.module.scss'
import Logo from '../Logo/Logo.jsx';
import { FollowUs } from '../FollowUs/FollowUs';
import { Navigation } from '../Navigation/Navigation';
import SubscribeForm from '../SubscribeForm/SubscribeForm';

const Footer = () => {
  return (
    <footer>
      <div className={css.footerContainer}>
        <div className={css.footerContentContainer}>
          <div className={css.footerFollowUs}>
            <Logo />
            <FollowUs />
          </div>
          <div className={css.footerNawigation}>
            <Navigation style="cssfoot" />
          </div>
          <div className={css.footerSupscribe}>
            <SubscribeForm />
          </div>
        </div>
        <div className={css.footerBasementContainer}>
          <p>©2023 Drink Master. All rights reserved.</p>
          <div className={css.footerPolicyContainer}>
            <a>Privacy Policy</a>
            <a>Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
