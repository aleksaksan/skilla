import React from 'react';
import { SvgLoader } from '../SvgIcon/SvgFiles/SvgLoader/SvgLoader';
import style from './Loader.module.scss';

export type LoaderProps = {
  isHaveText?: boolean,
}

export const Loader = (props: LoaderProps) => {
  return (
    <div className={style.loader}>
      <SvgLoader />
      {props.isHaveText && <div>Загружаем</div>}
    </div>
  )
}
