import React from 'react';
import { RatingEnum } from '../../../shared/enums/RatingEnum';
import style from './RatingLabel.module.scss';
import { RatingProps } from '../Rating';


export const RatingLabel = (props: RatingProps) => {
 switch (props.rating) {
    case RatingEnum.Badly:
      return (
        <div className={`${style.label} ${style.bad}`}>
          Плохо
        </div>
      )
    case RatingEnum.Good: 
      return (
        <div className={`${style.label} ${style.good}`}>
          Хорошо
        </div>
      )
    case RatingEnum.Well:
      return (
        <div className={`${style.label} ${style.well}`}>
          Отлично
        </div>
      )
    default: 
      return <></>
  };
}
