import React from 'react';
import style from './Header.module.scss';
import { CurrentDay } from './CurrentDay';
import { CallsAnalysis } from './CallsAnalysis';

export const Header = () => {
  return (
    <header className={`${style.header} container`}>
      <CurrentDay /> 
      <CallsAnalysis
        newCalls={{value: 20, maxValue: 30}} 
        qualityValue={40}
        conversionValue={67}
      />
    </header>
  )
}
