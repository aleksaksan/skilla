import React from 'react';
import style from './Header.module.scss';

const getWeekDay = (date: Date) => {
  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

  return days[date.getDay()];
};

const getMounth = (date: Date) => {
  const mounths = ['янв', 'фев', 'мар', 'апр', 'мая', 'июня', 'июля', 'авг', 'сен', 'окт', 'ноя', 'дек'];

  return mounths[date.getMonth()];
};

const getDay = (date: Date) => {
  return date.getDay();
};

const getDate = () => {
  const date = new Date();

  return `${getWeekDay(date)}, ${getDay(date)} ${getMounth(date)}`;
};


export const CurrentDay = () => {

  const date = getDate();

  return (
    <div className={style.date}>{date}</div>
  )
}
