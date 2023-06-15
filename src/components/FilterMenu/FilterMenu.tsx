import { useState } from 'react';

import { DropdownMenu } from './DropdownMenu/DropdownMenu'
import { DropDownItem, DropdownCallsItems } from './DropdownMenu/DropDownMock';
import { useDetectClickOutside } from 'react-detect-click-outside';
import style from '../FilterMenu/DropdownMenu/DropdownMenu.module.scss';
import { FilterButton } from './FilterButton/FilterButton';

export const FilterMenu = () => {
  const [isOpened, setIsOpened] = useState(true);
  const [dropdownElement, setDropdownElement] = useState(DropdownCallsItems[0]);

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
      <DropdownMenu data={DropdownCallsItems} isOpened={isOpened} closeDropdown={()=>setIsOpened(false)} getSelectedElement={getSelectedElementHandler}/>
    </div>
  )
}
