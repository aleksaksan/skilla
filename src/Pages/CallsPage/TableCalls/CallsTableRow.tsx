import { useEffect, useState } from 'react'
import { Checkbox } from '../../../components/Checkbox/Checkbox'
import { SvgInOutCall } from '../../../components/SvgIcon/SvgInOutCall'
import { Rating } from '../../../components/Rating/Rating'
import style from './CallsTable.module.scss';
import { RatingEnum } from '../../../shared/enums/RatingEnum';
import { SvgWebIcon } from '../../../components/SvgIcon/SvgFiles/SvgInOutCall/SvgWebIcon';

export type CallsTableRowProps = {
  isChecked: boolean,
  onCheckboxClick: () => void,
  isCallIncoming: boolean,
  isCallMissed: boolean,
  callsTime: string,
  avatar: string,
  contact?: string,
  source?: string,
  callsDuration: string,
  id: string,
  isFromSite?: boolean,
}

export const CallsTableRow = (props: CallsTableRowProps) => {
  const [isVisible, setIsVisible] = useState(props.isChecked);

  useEffect(()=>{
    if (!props.isChecked) {
      setIsVisible(false);
    }
  },[props.isChecked]);

  const onMouseOverHandler = () => {
    setIsVisible(true);
  };
  const onMouseLeaveHandler = () => {
    if (!props.isChecked) {
      setIsVisible(false);
    }
  };

  return (
    <div className={style.grid} onMouseOver={onMouseOverHandler} onMouseLeave={onMouseLeaveHandler}>
      <div className={style.centred}><Checkbox checked={props.isChecked} isVisible={isVisible || props.isChecked} onClick={props.onCheckboxClick} /></div>
      <div className={style.centred}><SvgInOutCall callsType={props.isCallIncoming ? 'incoming' : 'outcoming'} missed={props.isCallMissed} /></div>
      <div className={style.time}>{props.callsTime}</div>
      <div className={style.avatar}><img src={props.avatar} alt='avatar' /></div>
      <div>{props.isFromSite && <SvgWebIcon />}</div>
      <div className={style.phone}>{props.contact}</div>
      <div className={style.source}>{props.source}</div>
      <div>
        <Rating rating={RatingEnum.Well} isPin={true} />
        <Rating rating={RatingEnum.Well} isPin={false} />
      </div>
      <div>{props.callsDuration}</div>
    </div>
  )
}
