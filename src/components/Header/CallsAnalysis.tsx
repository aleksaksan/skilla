import React from 'react';
import style from './Header.module.scss';

export type CallsAnalysisProps = {
  newCalls: {
    maxValue: number,
    value: number,
  },
  qualityValue: number,
  conversionValue: number,

};

export const CallsAnalysis = (props: CallsAnalysisProps) => {
  return (
    <div className={style.container}>
      <div className={`${style.analysis} ${style.green}`}>
        <label>
          <span>Новые звонки </span>
          <span className={style.txt_green}>{props.newCalls.value} из {props.newCalls.maxValue} шт</span>
        </label>
        <input className={style.input} type='range' defaultValue={props.newCalls.value} max={props.newCalls.maxValue} disabled />
      </div>
      <div className={`${style.analysis} ${style.yellow}`}>
        <label>
          <span>Качество разговоров </span>
          <span className={style.txt_yellow}>{props.qualityValue} %</span>
        </label>
        <input className={style.input} type='range' defaultValue={props.qualityValue} max={100} disabled />
      </div>
      <div className={`${style.analysis} ${style.red}`}>
        <label>
          <span>Конверсия в заказ </span>
          <span className={style.txt_red}>{props.conversionValue} %</span>
        </label>
        <input className={style.input} type='range' defaultValue={props.conversionValue} max={100} disabled />
      </div>
    </div>
  )
}
