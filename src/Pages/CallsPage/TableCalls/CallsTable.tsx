import { useState } from 'react';
import { Checkbox } from '../../../components/Checkbox/Checkbox';
import style from './CallsTable.module.scss';
import { SvgInOutCall } from '../../../components/SvgIcon/SvgInOutCall';
import employe from '../../../assets/img/avatar.png';
import { Rating } from '../../../components/Rating/Rating';
import { RatingEnum } from '../../../shared/enums/RatingEnum';
import { CallsTableRow } from './CallsTableRow';
import { CallItems, StatusEnum } from '../../../models/CallItemResponse';

export type CallsTableProps = {
  rowData: CallItems[],

}

const getDuration = (time: number) => {
  let min = time / 60 > 1 ? Math.floor(time / 60) : 0;
  let sec = time % 60;
  if (min === 0 && sec === 0) return '';
  return `${min}:${sec < 10 ? `0${sec}` : sec}`;
}

const getPhoneNumber = (number: string) => {
  if (!Number(number)) {
    return number;
  }
    return `+${number[0]} (${number.slice(1,4)}) ${number.slice(4,7)}-${number.slice(7,9)}-${number.slice(9)}`;
}

export const CallsTable = (props: CallsTableProps) => {
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
        <div></div>
        <div>Звонок</div>
        <div>Источник</div>
        <div>Оценка</div>
        <div>Длительность</div>
      </div>
      <CallsTableRow
        id={"0"}
        isChecked={false}
        onCheckboxClick={()=>{}}
        avatar={employe}
        callsDuration='12:06'
        callsTime='19:00'
        isCallIncoming={true}
        isCallMissed={false}
        onMouseOver={()=>{}}
        isMouseOver={true}
        contact='+7 (987) 567-17-12'
        source='Санкт-Петербург источник в три строки, кто-то так пишет, ну ладно, но некрасиво'
        isFromSite={true}
       />
      <CallsTableRow
        id={"1"}
        isChecked={false}
        onCheckboxClick={()=>{}}
        avatar={employe}
        callsDuration='12:06'
        callsTime='19:00'
        isCallIncoming={true}
        isCallMissed={false}
        onMouseOver={()=>{}}
        isMouseOver={true}
        contact='Константиний Константинопольский ООО «Фестивальный эффект»'
        source='Rabota.ru'
        isFromSite={true}
       />
       {props.rowData.map(item=>(
        <CallsTableRow
          key={item.id}
          id={item.id}
          isChecked={item.isChecked}
          onCheckboxClick={()=>{}}
          avatar={item.person_avatar}
          callsDuration={getDuration(item.time)}
          callsTime={item.date.slice(12,16)}
          isCallIncoming={item.in_out ? true : false}
          isCallMissed={item.status === StatusEnum.Дозвонился ? true : false}
          onMouseOver={()=>{}}
          isMouseOver={true}
          contact={`${item.partner_data.name} ${getPhoneNumber(item.partner_data.phone)}`}
          source={item.source}
          isFromSite={item.isFromSite}
        />
       ))}
    </div>
  )
}
