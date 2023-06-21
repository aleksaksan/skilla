import React from 'react';
import style from './Header.module.scss';
import { CurrentDay } from './CurrentDay';
import { CallsAnalysis } from './CallsAnalysis';
import { SvgSearch } from '../SvgIcon/SvgFiles/SvgButtonsIcons/SvgSearch';
import { FilterMenu } from '../FilterMenu/FilterMenu';
import photo from '../../img/img.png';
import { SvgChevron } from '../SvgIcon/SvgFiles/SvgButtonsIcons/SvgChevron';

export const Header = () => {
  return (
    <header className={`${style.header} container`}>
      <CurrentDay /> 
      <CallsAnalysis
        newCalls={{value: 20, maxValue: 30}} 
        qualityValue={40}
        conversionValue={67}
      />
      <div className={style.search}>
        <SvgSearch />
      </div>
      <FilterMenu items={[{id: 1, elem: {textValue: 'ИП Сидорова Александра Михайловна'}}]} />
      <div className={style.profile}>
        <img src={photo} alt='img' />
        <SvgChevron />
      </div>
    </header>
  )
}
