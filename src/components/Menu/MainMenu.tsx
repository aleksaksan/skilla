import React from 'react';
import style from './MainMenu.module.scss';
import { SvgLogo } from '../SvgIcon/SvgFiles/SvgLogo';
import { SvgResults } from '../SvgIcon/SvgFiles/SvgMenu/SvgNavIcons/SvgResults';
import { SvgOrders } from '../SvgIcon/SvgFiles/SvgMenu/SvgNavIcons/SvgOrders';
import { SvgMessage } from '../SvgIcon/SvgFiles/SvgMenu/SvgNavIcons/SvgMessage';
import { SvgCalls } from '../SvgIcon/SvgFiles/SvgMenu/SvgNavIcons/SvgCalls';
import { SvgCounterParty } from '../SvgIcon/SvgFiles/SvgMenu/SvgNavIcons/SvgCounterParty';
import { SvgDocs } from '../SvgIcon/SvgFiles/SvgMenu/SvgNavIcons/SvgDocs';
import { SvgExecuter } from '../SvgIcon/SvgFiles/SvgMenu/SvgNavIcons/SvgExecuter';
import { SvgReports } from '../SvgIcon/SvgFiles/SvgMenu/SvgNavIcons/SvgReports';
import { SvgKnowlege } from '../SvgIcon/SvgFiles/SvgMenu/SvgNavIcons/SvgKnowlege';
import { SvgSettings } from '../SvgIcon/SvgFiles/SvgMenu/SvgNavIcons/SvgSettings';
import { AlertIcon } from './AlertIcon';
import { MenuButton } from './MenuButton/MenuButton';
import { SvgAdd } from '../SvgIcon/SvgFiles/SvgMenu/SvgAdd';
import { SvgPayIcon } from '../SvgIcon/SvgFiles/SvgMenu/SvgPayIcon';

export const MainMenu = () => {
  return (
    <menu className={style.menu}>
      <SvgLogo />
      <nav className={style.nav}>
        <a className={style.link} href='/#'>
          <div className={style.icon_wrapper}>
            <SvgResults />            
          </div>
          <div>
            Итоги
          </div>
        </a>
        <a className={style.link} href='/#'>
          <div className={style.icon_wrapper}>
            <SvgOrders />            
          </div>
          <div>
            Заказы
          </div>
        </a>
        <a className={style.link} href='/#'>
          <div className={style.icon_wrapper}>
            <SvgMessage />            
          </div>
          <div>
            Сообщения
          </div>
        </a>
        <a className={`${style.link} ${style.active}`} href='/#'>
          <div className={style.icon_wrapper}>
            <SvgCalls />            
          </div>
          <div>
            Звонки
          </div>
          <AlertIcon />
        </a>
        <a className={style.link} href='/#'>
          <div className={style.icon_wrapper}>
            <SvgCounterParty />            
          </div>
          <div>
            Контрагенты
          </div>
        </a>
        <a className={style.link} href='/#'>
          <div className={style.icon_wrapper}>
            <SvgDocs />            
          </div>
          <div>
            Документы
          </div>
        </a>
        <a className={style.link} href='/#'>
          <div className={style.icon_wrapper}>
            <SvgExecuter />            
          </div>
          <div>
            Исполнители
          </div>
        </a>
        <a className={style.link} href='/#'>
          <div className={style.icon_wrapper}>
            <SvgReports />            
          </div>
          <div>
            Отчёты
          </div>
        </a>
        <a className={style.link} href='/#'>
          <div className={style.icon_wrapper}>
            <SvgKnowlege />            
          </div>
          <div>
            База знаний
          </div>
        </a>
        <a className={style.link} href='/#'>
          <div className={style.icon_wrapper}>
            <SvgSettings />            
          </div>
          <div>
            Настройки
          </div>
        </a>
      </nav>
      <MenuButton>
        <div>
          Добавить заказ
        </div>
        <SvgAdd />
      </MenuButton>
      <MenuButton>
        <div>
          Оплата
        </div>
        <SvgPayIcon />
      </MenuButton>
    </menu>
  );
};
