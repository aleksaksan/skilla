import React from 'react'
import { Checkbox } from '../../../components/Checkbox/Checkbox'
import { SvgInOutCall } from '../../../components/SvgIcon/SvgInOutCall'
import { Rating } from '../../../components/Rating/Rating'
import style from './CallsTable.module.scss';
import { RatingEnum } from '../../../shared/enums/RatingEnum';
import { SvgWebIcon } from '../../../components/SvgIcon/SvgFiles/SvgInOutCall/SvgWebIcon';

export type CallsTableRowProps = {
  onMouseOver?: () => void,
  isChecked: boolean,
  isMouseOver: boolean,
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
  return (
    <div className={style.grid} onMouseOver={props.onMouseOver}>
      <div><Checkbox checked={props.isChecked} isVisible={props.isMouseOver} onClick={props.onCheckboxClick} /></div>
      <div><SvgInOutCall callsType={props.isCallIncoming ? 'incoming' : 'outcoming'} missed={props.isCallMissed} /></div>
      <div className={style.time}>{props.callsTime}</div>
      <div className={style.avatar}><img src={props.avatar} alt='avatar' /></div>
      <div>{props.isFromSite && <SvgWebIcon />}</div>
      <div className={style.phone}>{props.contact}</div>
      <div className={style.source}>{props.source}</div>
      <div><Rating rating={RatingEnum.Well} isPin={true} /> <Rating rating={RatingEnum.Well} isPin={false} /> </div>
      <div>{props.callsDuration}</div>
    </div>
  )
}
