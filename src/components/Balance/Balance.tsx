import React, { useState } from 'react';
import style from './Balance.module.scss';
import { SvgAdd } from '../SvgIcon/SvgFiles/SvgBalance/SvgAdd';

export type BalanceProps = {
  onClickHandler: () => void,
}

export const Balance = (props: BalanceProps) => {
  const [balance, setBalance] = useState(272);
  // useEffect(() => {
  //   fetch().then(res=>setBalance(res))
  // }, []);

  return (
    <div className={style.container} onClick={props.onClickHandler}>
      <div className={style.header}>Баланс</div>
      <div>{balance} ₽</div>
      <SvgAdd />
    </div>
  )
}
