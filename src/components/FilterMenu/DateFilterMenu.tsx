import { useState } from 'react'
import { DatePicker } from './DatePicker/DatePicker'
import { DropdownMenu } from './DropdownMenu/DropdownMenu'
import { DropDownItem, DropdownDateItems } from './DropdownMenu/DropDownMock';
import { useDetectClickOutside } from 'react-detect-click-outside';
import style from './DropdownMenu.module.scss';

export const DateFilterMenu = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [dropdownElement, setDropdownElement] = useState(DropdownDateItems[0]);

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
      <DatePicker value={dropdownElement.elem.textValue!} onClick={toggle} />
      <DropdownMenu data={DropdownDateItems} isOpened={isOpened} closeDropdown={()=>setIsOpened(false)} getSelectedElement={getSelectedElementHandler}/>
    </div>
  )
}
