import React from 'react'
// import PropTypes from 'prop-types';

// import clsx from 'clsx';
import style from './FollowUs.module.scss';
import InstagramSVG from '../ComponentsSVG/InstagramSVG';
import FacebookSVG from '../ComponentsSVG/FacebookSVG';
import YoutubeSVG from '../ComponentsSVG/YoutubeSVG';

export const FollowUs = () => {
  return (
    <div>
      <div className={style.followUs}>
        <a className={style.followUsAncor} href="/">
          <FacebookSVG className={`followUsImage`} fill={"#F3F3F3"} />
        </a>
        <a className={style.followUsAncor} href="/">
          <InstagramSVG className={`followUsImage`} fill={"#F3F3F3"} />
        </a>
        <a className={style.followUsAncor} href="/">
          <YoutubeSVG className={`followUsImage`} fill={"#F3F3F3"} />
        </a>
      </div>
    </div>
  );
};
