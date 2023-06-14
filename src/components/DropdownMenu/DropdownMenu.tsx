import style from './DropdownMenu.module.scss';
import { DropDownItem } from './DropDownMock';
import { useDetectClickOutside } from 'react-detect-click-outside';

export type DropdownMenuProps = {
  data: DropDownItem[],
  getSelectedElement?: (item: DropDownItem) => void,
  isOpened: boolean,
  closeDropdown: () => void,
};



export const DropdownMenu = (props: DropdownMenuProps) => {
  

  const onElementClick = (elem: DropDownItem) => {
    // setChousenItem(elem);
    props.getSelectedElement?.(elem);
  };

//   const clickOutside = useDetectClickOutside({ onTriggered: props.closeDropdown });
//  ref={clickOutside}
  return (
    <div className={`${props.isOpened ? `${style.dropdown} ${style.opened}` : `${style.dropdown}`}`}>
      <ul>
        {props.data.map(item => (
          <li className={style.item} key={item.id} onClick={()=>onElementClick(item)}>
            {item.elem.textValue}
          </li>
        ))}
      </ul>
    </div>
  )
}
