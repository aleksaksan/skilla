import React from 'react';
import { RatingEnum } from '../../../shared/enums/RatingEnum';
import style from './RatingPins.module.scss';
import { RatingProps } from '../Rating';

export const RatingPins = (props: RatingProps) => {
  
  switch (props.rating) {
    case RatingEnum.Badly:
      return (
        <div className={style.container}>
          <span className={`${style.pin} ${style.red}`}></span>
        </div>
      )
    case RatingEnum.Good: 
      return (
        <div className={style.container}>
          <span className={`${style.pin} ${style.grey}`}></span>
          <span className={`${style.pin} ${style.grey}`}></span>
        </div>
      )
    case RatingEnum.Well:
      return (
      <div className={style.container}>
        <span className={`${style.pin} ${style.green}`}></span>
        <span className={`${style.pin} ${style.green}`}></span>
        <span className={`${style.pin} ${style.green}`}></span>
      </div>
      )
    default: 
      return <></>
  };
};
