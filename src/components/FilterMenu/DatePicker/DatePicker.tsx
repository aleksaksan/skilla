import style from './DatePicker.module.scss';
import { SvgCalendar } from '../../SvgIcon/SvgFiles/SvgDatePicker/SvgCalendar';
import { SvgChevronLeft } from '../../SvgIcon/SvgFiles/SvgDatePicker/SvgChevronLeft';
import { SvgChevronRight } from '../../SvgIcon/SvgFiles/SvgDatePicker/SvgChevronRight';

export type DatePickerProps = {
  onClick?: () => void;
  onClickFroward?: () => void;
  onClickBacward?: () => void;
  value: string;
}


export const DatePicker = (props: DatePickerProps) => {

  return (
    <div className={style.container}>
      <button>
        <SvgChevronLeft />
      </button>
      <button onClick={props.onClick}>
        <SvgCalendar />
        <label>{props.value}</label>
      </button>
      <button>
        <SvgChevronRight />
      </button>
    </div>
  )
}
