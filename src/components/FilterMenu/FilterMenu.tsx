import { useState } from 'react';

import { DropdownMenu } from './DropdownMenu/DropdownMenu'
import { DropDownItem } from './DropdownMenu/DropDownMock';
import { useDetectClickOutside } from 'react-detect-click-outside';
import style from './DropdownMenu.module.scss';
import { FilterButton } from './FilterButton/FilterButton';

export type FilterMenuProps = {
  items: DropDownItem[],
}

export const FilterMenu = (props: FilterMenuProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const [dropdownElement, setDropdownElement] = useState(props.items[0]);

  const getSelectedElementHandler = (elem: DropDownItem) => {
    setDropdownElement(elem);
    closeDropdown();
  }

  const toggle = () => {
    setIsOpened(!isOpened);
  };

  const closeDropdown = () => {
      setIsOpened(false);
  };
  
  const clickOutside = useDetectClickOutside({ onTriggered: closeDropdown });

  return (
    <div className={style.wrapper} ref={clickOutside}>
      <FilterButton value={dropdownElement} onClick={toggle} isMenuOpened={isOpened} />
      <DropdownMenu data={props.items} isOpened={isOpened} closeDropdown={closeDropdown} getSelectedElement={getSelectedElementHandler}/>
    </div>
  )
}
