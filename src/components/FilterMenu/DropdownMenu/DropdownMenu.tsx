import { forwardRef, useState } from 'react';
import style from '../DropdownMenu.module.scss';
import { DropDownItem } from './DropDownMock';

export type DropdownMenuProps = {
  data: DropDownItem[],
  getSelectedElement?: (item: DropDownItem) => void,
  isOpened: boolean,
  closeDropdown: () => void,
};



export const DropdownMenu = forwardRef((props: DropdownMenuProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const [activeId, setActiveId] = useState(0);
  const onElementClick = (elem: DropDownItem) => {
    props.getSelectedElement?.(elem);
    setActiveId(Number(elem.id));
  };

  return (
    <div className={`${props.isOpened ? `${style.dropdown} ${style.opened}` : `${style.dropdown}`}`} ref={ref} >
      <ul>
        {props.data.map(item => (
          <li
            className={activeId == item.id ? `${style.item} ${style.active} `: `${style.item}`}
            key={item.id}
            onClick={()=>onElementClick(item)}
          >
            {item.elem.textValue}
            {item.elem.jsx && item.elem.jsx}
          </li>
        ))}
      </ul>
    </div>
  )
});
