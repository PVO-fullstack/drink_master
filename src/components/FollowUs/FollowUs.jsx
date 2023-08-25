// import React from 'react'
// import PropTypes from 'prop-types';

// import clsx from 'clsx';
import style from './FollowUs.module.scss';

export const FollowUs = () => {
  return (
    <div>
      <div className={style.heading}>FollowUs</div>

      <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
        <div>Facebook</div>
        <div>Instagram</div>
        <div>YouTube</div>
      </div>
    </div>
  );
};
