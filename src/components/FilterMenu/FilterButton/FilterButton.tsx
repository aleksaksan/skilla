import React from 'react';
import style from './FilterButton.module.scss';
import { DropDownItem } from '../DropdownMenu/DropDownMock';
import { SvgChevron } from '../../SvgIcon/SvgFiles/SvgButtonsIcons/SvgChevron';

export type FilterButtonProps = {
  value: DropDownItem,
  onClick: () => void,
  isMenuOpened: boolean,
}

export const FilterButton = (props: FilterButtonProps) => {
  return (
    <div className={props.isMenuOpened ? `${style.button} ${style.opened}` : `${style.button}`} onClick={props.onClick}>
      {props.value.elem.jsx ? props.value.elem.jsx : props.value.elem.textValue}
      <SvgChevron />
    </div>
  )
}
