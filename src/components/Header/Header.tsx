import React from 'react';
import style from './Header.module.scss';
import { CurrentDay } from './CurrentDay';
import { CallsAnalysis } from './CallsAnalysis';
import { SvgSearch } from '../SvgIcon/SvgFiles/SvgButtonsIcons/SvgSearch';
import { FilterMenu } from '../FilterMenu/FilterMenu';
import { DropdownCallsItems } from '../FilterMenu/DropdownMenu/DropDownMock';

export const Header = () => {
  return (
    <header className={`${style.header} container`}>
      <CurrentDay /> 
      <CallsAnalysis
        newCalls={{value: 20, maxValue: 30}} 
        qualityValue={40}
        conversionValue={67}
      />
      <SvgSearch />
      <FilterMenu items={[{id: 1, elem: {textValue: 'ИП Сидорова Александра Михайловна'}}]} />
      <FilterMenu items={DropdownCallsItems} />
    </header>
  )
}
