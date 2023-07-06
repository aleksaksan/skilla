import React, { useEffect, useState } from 'react';
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
import { CallItemResponse, CallItems } from '../../models/CallItemResponse';
import { Balance } from '../../components/Balance/Balance';

export const CallsPage = () => {
  const [modifiedResponse, setModifiedResponse] = useState<CallItems[]>([]);
  const [isAllChecked, setIsAllChecked] = useState(false);
  
  const onCheckboxChanged = (id: string) => {
    const changedValue = modifiedResponse.find(item => item.id === id);
    changedValue!.isChecked = !changedValue!.isChecked;
    setModifiedResponse([...modifiedResponse]);
  };

  const onCheckAllHandler = () => {
    setIsAllChecked(!isAllChecked);
    setModifiedResponse(modifiedResponse.map((item)=>(
      {
        ...item,
        isChecked: !isAllChecked,
      }
    )));
  };
  
  useEffect(() => {
    axios({
      baseURL: `https://api.skilla.ru/mango/getList`,
      method: `post`,
      headers: {
        Authorization: 'Bearer testtoken',
        'Content-Type': 'application/json',
      },
      params: {
        date_start: '2023-07-01',
        date_end: '2023-07-03',
      },
    }).then(respone => 
      respone.data.results as CallItemResponse[]
    ).then((results) => {
      const callsItems: CallItems[] = results.map((item)=>(
        {
          ...item,
          id: item.date + item.partner_data,
          isChecked: false,
          isFromSite: Boolean(item.from_site),
        }
      ))
      setModifiedResponse(callsItems);
    });
    }, []);
  

  return (
    <div className='container'>
      <div className={style.balance_raw}>
        <Balance onClickHandler={()=>{}}/>
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
      <CallsTable rowData={modifiedResponse} onCheckboxChanged={onCheckboxChanged} isAllChecked={isAllChecked} onCheckAll={onCheckAllHandler}/>
    </div>
  )
}
