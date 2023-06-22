import React, { useEffect } from 'react';
import style from './CallsPage.module.scss'
import { DateFilterMenu } from '../../components/FilterMenu/DateFilterMenu';
import { SvgSearch } from '../../components/SvgIcon/SvgFiles/SvgButtonsIcons/SvgSearch';
import { FilterMenu } from '../../components/FilterMenu/FilterMenu';
import {
  DropdownCallsItems,
  DropdownEmployesItems,
  DropdownMistakesItemes,
  DropdownRatingItems,
  DropdownSourcesItemes,
  DropdownTypeItems } from '../../components/FilterMenu/DropdownMenu/DropDownMock';
import { CallsTable } from './TableCalls/CallsTable';
import axios from 'axios';

export const CallsPage = () => {
  
  useEffect(() => {
    axios({
      baseURL: `https://api.skilla.ru/mango/getList`,
      method: `post`,
      headers: {
        Authorization: 'Bearer testtoken',
        'Content-Type': 'application/json',
      },
      params: {
        limit: 10,
        date_start: '2023-06-19',
        date_end: '2023-06-22',
      }
    }).then(respone => console.log(respone))
  }, []);
  

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
      <CallsTable />
    </div>
  )
}
