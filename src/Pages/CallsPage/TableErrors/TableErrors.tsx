import React from 'react';
import style from './TableErrors.module.scss';
import { Rating } from '../../../components/Rating/Rating';
import { RatingEnum } from '../../../shared/enums/RatingEnum';

export type TableErrorsProps = {
  errors: string[];
}

export const TableErrors = (props: TableErrorsProps) => {

switch (props.errors.length) {
    case 0:
      return (
        <button className={style.recognizing} onClick={()=>{console.warn("endpoint doesn't exist for this API")}}>Распознать</button>
      )
    case 1: 
      if (props.errors.includes('Скрипт не использован')) {
        return (
          <div className={style.error}>Скрипт не использован</div>
        )
      }
      return (
        <>
          <Rating rating={RatingEnum.Well} isPin={true} />
          <Rating rating={RatingEnum.Well} isPin={false} />
        </>
      )
    case 3:
      return (
        <>
          <Rating rating={RatingEnum.Good} isPin={true} />
          <Rating rating={RatingEnum.Good} isPin={false} />
        </>
      )
    default: 
      return (
        <>
          <Rating rating={RatingEnum.Badly} isPin={true} />
          <Rating rating={RatingEnum.Badly} isPin={false} />
        </>
      )
  };
}