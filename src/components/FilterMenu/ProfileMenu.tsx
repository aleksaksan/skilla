import React, { useState } from 'react'
import { FilterButton } from './FilterButton/FilterButton';
import { DropdownMenu } from './DropdownMenu/DropdownMenu';
import { DropDownItem } from './DropdownMenu/DropDownMock';
import { useDetectClickOutside } from 'react-detect-click-outside';
import style from './DropdownMenu.module.scss';

export type ProfileMenuProps = {
  items: DropDownItem[],
}

export const ProfileMenu = (props: ProfileMenuProps) => {
  const [isOpened, setIsOpened] = useState(true);
  const [dropdownElement, setDropdownElement] = useState(props.items[0]);

  const getSelectedElementHandler = (elem: DropDownItem) => {
    setDropdownElement(elem)
  }

  const toggle = () => {
    setIsOpened(!isOpened)
  };

  const closeDropdown = () => {
      setIsOpened(false);
  };
  
  const clickOutside = useDetectClickOutside({ onTriggered: closeDropdown });

  return (
    <div className={style.wrapper} ref={clickOutside}>
      <FilterButton value={dropdownElement} onClick={toggle} isMenuOpened={isOpened} />
      <DropdownMenu data={props.items} isOpened={isOpened} closeDropdown={()=>setIsOpened(false)} getSelectedElement={getSelectedElementHandler}/>
    </div>
  )
}
