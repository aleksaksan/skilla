import { useState } from 'react';
import { Checkbox } from '../../../components/Checkbox/Checkbox';
import style from './CallsTable.module.scss';
import { SvgInOutCall } from '../../../components/SvgIcon/SvgInOutCall';
import employe from '../../../assets/img/avatar.png';
import { Rating } from '../../../components/Rating/Rating';
import { RatingEnum } from '../../../shared/enums/RatingEnum';
import { CallsTableRow } from './CallsTableRaw';

export type CallsTableProps = [
  
]

export const CallsTable = () => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isHeadersCheckbVisible, setIsHeadersCheckbVisible] = useState(false);
  const [isCheckedArr, setIsCheckedArr] = useState<boolean[]>([]);



  const checkAllHandler = () => {
    setIsAllChecked(!isAllChecked);
  };

  const heaersCheckboxVisibleHandler = () => {
    setIsHeadersCheckbVisible(true);
  };
  const heaersCheckboxInisibleHandler = () => {
    if (!isAllChecked) {
      setIsHeadersCheckbVisible(false);
    }
  };

  return (
    <div className={style.table_wrapper}>
      <div className={`${style.header} ${style.grid}`} onMouseOver={heaersCheckboxVisibleHandler} onMouseLeave={heaersCheckboxInisibleHandler}>
        <div><Checkbox checked={isAllChecked} isVisible={isHeadersCheckbVisible} onClick={checkAllHandler} /></div>
        <div>Тип</div>
        <div>Время</div>
        <div>Сотрудник</div>
        <div>Звонок</div>
        <div>Источник</div>
        <div>Оценка</div>
        <div>Длительность</div>
      </div>
      <CallsTableRow
        isChecked={false}
        onCheckboxClick={()=>{}}
        avatar={employe}
        callsDuration='12:06'
        callsTime='19:00'
        isCallIncoming={true}
        isCallMissed={false}
        onMouseOver={()=>{}}
        isMouseOver={true}
        phoneNumber='+7 (987) 567-17-12'
        source='Rabota.ru'
       />
    </div>
  )
}
