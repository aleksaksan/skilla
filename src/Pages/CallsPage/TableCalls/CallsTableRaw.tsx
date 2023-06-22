import React from 'react'
import { Checkbox } from '../../../components/Checkbox/Checkbox'
import { SvgInOutCall } from '../../../components/SvgIcon/SvgInOutCall'
import { Rating } from '../../../components/Rating/Rating'
import style from './CallsTable.module.scss';
import { RatingEnum } from '../../../shared/enums/RatingEnum';

export type CallsTableRow = {
  onMouseOver?: () => void,
  isChecked: boolean,
  isMouseOver: boolean,
  onCheckboxClick: () => void,
  isCallIncoming: boolean,
  isCallMissed: boolean,
  callsTime: string,
  avatar: string,
  phoneNumber?: string,
  source?: string,
  callsDuration: string,
}

export const CallsTableRow = (props: CallsTableRow) => {
  return (
    <div className={style.grid} onMouseOver={props.onMouseOver}>
      <div><Checkbox checked={props.isChecked} isVisible={props.isMouseOver} onClick={props.onCheckboxClick} /></div>
      <div><SvgInOutCall callsType={props.isCallIncoming ? 'incoming' : 'outcoming'} missed={props.isCallMissed} /></div>
      <div>{props.callsTime}</div>
      <div><img src={props.avatar} alt='avatar'/></div>
      <div>{props.phoneNumber}</div>
      <div className={style.source}>{props.source}</div>
      <div><Rating rating={RatingEnum.Well} isPin={true} /> <Rating rating={RatingEnum.Well} isPin={false} /> </div>
      <div>{props.callsDuration}</div>
    </div>
  )
}
