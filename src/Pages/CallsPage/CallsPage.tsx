import React from 'react';
import style from './CallsPage.module.scss'
import { DateFilterMenu } from '../../components/FilterMenu/DateFilterMenu';
import { SvgSearch } from '../../components/SvgIcon/SvgFiles/SvgButtonsIcons/SvgSearch';
import { FilterMenu } from '../../components/FilterMenu/FilterMenu';
import { DropdownCallsItems, DropdownEmployesItems, DropdownMistakesItemes, DropdownRatingItems, DropdownSourcesItemes, DropdownTypeItems } from '../../components/FilterMenu/DropdownMenu/DropDownMock';

export const CallsPage = () => {
  return (
    <div className='container'>
      <div className={style.balance_raw}>
        {/* balance here */}
        <DateFilterMenu />
      </div>
      <div className={style.filter_raw}>
        <div>
          <SvgSearch />
          Поиск по звонкам
        </div>
        <FilterMenu items={DropdownTypeItems} />
        <FilterMenu items={DropdownEmployesItems} />
        <FilterMenu items={DropdownCallsItems} />
        <FilterMenu items={DropdownSourcesItemes} />
        <FilterMenu items={DropdownRatingItems} /> 
        <FilterMenu items={DropdownMistakesItemes} />
      </div>
    </div>
  )
}
