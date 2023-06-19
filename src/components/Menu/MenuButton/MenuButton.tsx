import React from 'react';
import style from './MenuButton.module.scss';

export type MenuButtonProps = {
  children: JSX.Element | JSX.Element[],
}

export const MenuButton = (props: MenuButtonProps) => {
  return (
    <a className={style.btn} href="/#">{props.children}</a>
  )
}
