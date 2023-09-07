// import React from 'react'
import { Motivation } from '../../Motivation/Motivation';
import style from './HundredDaysModal.module.scss';

export const HundredDaysModal = () => {
  return (
    <Motivation className={style.container}>
      Wow! You have been using the application for 100 days!
    </Motivation>
  );
};