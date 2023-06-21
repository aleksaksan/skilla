import { useState } from 'react';

import { DropdownMenu } from './DropdownMenu/DropdownMenu'
import { DropDownItem, DropdownCallsItems } from './DropdownMenu/DropDownMock';
import { useDetectClickOutside } from 'react-detect-click-outside';
import style from '../FilterMenu/DropdownMenu/DropdownMenu.module.scss';
import { FilterButton } from './FilterButton/FilterButton';

export type FilterMenuProps = {
  items: DropDownItem[],
}

export const FilterMenu = (props: FilterMenuProps) => {
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
