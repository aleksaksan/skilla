import { forwardRef } from 'react';
import style from './DropdownMenu.module.scss';
import { DropDownItem } from './DropDownMock';

export type DropdownMenuProps = {
  data: DropDownItem[],
  getSelectedElement?: (item: DropDownItem) => void,
  isOpened: boolean,
  closeDropdown: () => void,
};



export const DropdownMenu = forwardRef((props: DropdownMenuProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const onElementClick = (elem: DropDownItem) => {
    props.getSelectedElement?.(elem);
  };

  return (
    <div className={`${props.isOpened ? `${style.dropdown} ${style.opened}` : `${style.dropdown}`}`} ref={ref} >
      <ul>
        {props.data.map(item => (
          <li className={style.item} key={item.id} onClick={()=>onElementClick(item)}>
            {item.elem.textValue}
          </li>
        ))}
      </ul>
    </div>
  )
});
