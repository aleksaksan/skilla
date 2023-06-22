import React from 'react'
import { Checkbox } from '../../../components/Checkbox/Checkbox';
import style from './CallseTable.module.scss';
import { SvgInOutCall } from '../../../components/SvgIcon/SvgInOutCall';
import employe from '../../../assets/img/avatar.png';
import { Rating } from '../../../components/Rating/Rating';
import { RatingEnum } from '../../../shared/enums/RatingEnum';

export const CallseTable = () => {
  return (
    <div className={style.table_wrapper}>
      <div className={`${style.header} ${style.grid}`} onMouseOver={()=>{}}>
        <div><Checkbox checked={false} isVisible={true} onClick={()=>{}} /></div>
        <div>Тип</div>
        <div>Время</div>
        <div>Сотрудник</div>
        <div>Звонок</div>
        <div>Источник</div>
        <div>Оценка</div>
        <div>Длительность</div>
      </div>
      <div className={style.grid} onMouseOver={()=>{}}>
        <div><Checkbox checked={false} isVisible={true} onClick={()=>{}} /></div>
        <div><SvgInOutCall callsType='incoming' /></div>
        <div>19:00</div>
        <div><img src={employe} alt='avatar'/></div>
        <div>+7 (987) 567-17-12</div>
        <div>Rabota.ru</div>
        <div><Rating rating={RatingEnum.Well} isPin={true} /> <Rating rating={RatingEnum.Well} isPin={false} /> </div>
        <div>12:08</div>
      </div>
    </div>
  )
}
