import style from './Checkbox.module.scss';

export type CheckBoxProps = {
  isVisible: boolean,  
  checked: boolean,
  onClick?: ()=>void,
}

export const Checkbox = (props: CheckBoxProps) => {

  return (
    <>
      {props.isVisible &&
        (props.checked ? 
          <svg onClick={props.onClick} className={style.square} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2222 0H1.77778C0.791111 0 0 0.8 0 1.77778V14.2222C0 15.2 0.791111 16 1.77778 16H14.2222C15.2089 16 16 15.2 16 14.2222V1.77778C16 0.8 15.2089 0 14.2222 0ZM6.22222 12.4444L1.77778 8L3.03111 6.74667L6.22222 9.92889L12.9689 3.18222L14.2222 4.44444L6.22222 12.4444Z" fill="#002CFB"/>
          </svg>
        :
          <svg onClick={props.onClick} className={style.square} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.2222 1.77778V14.2222H1.77778V1.77778H14.2222ZM14.2222 0H1.77778C0.8 0 0 0.8 0 1.77778V14.2222C0 15.2 0.8 16 1.77778 16H14.2222C15.2 16 16 15.2 16 14.2222V1.77778C16 0.8 15.2 0 14.2222 0Z" fill=""/>
          </svg>)
      } 
    </>
  )
}
