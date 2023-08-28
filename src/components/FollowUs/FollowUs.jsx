// import React from 'react'
// import PropTypes from 'prop-types';

// import clsx from 'clsx';
import style from './FollowUs.module.scss';

export const FollowUs = () => {
  return (
    <div>
      <div className={style.followUs}>
        <a className={style.followUsAncor} href="/">
          <img src="/images/SVG/facebook.svg" alt="facebook" className={style.followUsImage} width={28} height={28}></img>
        </a>
        <a className={style.followUsAncor} href="/">
          <img src="/images/SVG/instagram.svg" alt="instagram" className={style.followUsImage} width={28} height={28}></img>
        </a>
        <a className={style.followUsAncor} href="/">
          <img src="/images/SVG/youtube.svg" alt="youtube" className={style.followUsImage} width={28} height={28}></img>
        </a>
      </div>
    </div>
  );
};
