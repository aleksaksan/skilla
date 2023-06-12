import { ButtonIconsEnum } from '../../shared/enums/ButtonIconsEnum';
import { SvgButtonIcons } from '../SvgIcon/SvgButtonIcons';
import style from './IconButton.module.scss';

export type IconButtonProps = {
  SvgIcon: ButtonIconsEnum,
  onClick: ()=>void,
}

export const IconButton = (props: IconButtonProps) => {
  return (
    <button
      className={style.wrapper}
      onClick={props.onClick}>
        <SvgButtonIcons SvgIcon={props.SvgIcon} />
    </button>
  )
}
