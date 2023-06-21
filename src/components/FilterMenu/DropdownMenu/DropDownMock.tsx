import { RatingEnum } from "../../../shared/enums/RatingEnum"
import { Rating } from "../../Rating/Rating"

export type DropDownItem = {
  id: string | number,
  elem: DropDownElem,
}

export type DropDownElem = {//JSX.Element | string;
  jsx?: JSX.Element,
  textValue?: string,
}
export const DropdownDateItems: DropDownItem[] = [
  { id: 0, elem: { textValue: "3 дня" } },
  { id: 1, elem: { textValue: "Неделя" } },
  { id: 2, elem: { textValue: "Месяц" } },
  { id: 3, elem: { textValue: "Год" } },
  //TODO add date container { id: 4, item: ???}
]

//Calls
export const DropdownCallsItems: DropDownItem[] = [
  {id: 0, elem: { textValue: "Все звонки" } },
  {id: 1, elem: { textValue: "Новые клиенты",  } },
  {id: 2, elem: { textValue: "Все исполнители" } },
  {id: 3, elem: { textValue: "Через приложение" } },
  {id: 4, elem: { textValue: "Прочие звонки" } },
]

//Types
export const DropdownTypeItems: DropDownItem[] = [
  {id: 0, elem: { textValue: "Все типы" } },
  {id: 1, elem: { textValue: "Входящие" } },
  {id: 2, elem: { textValue: "Исходящие" } },
]

//Employers
export const DropdownEmployesItems: DropDownItem[] = [
  {id: 0, elem: { textValue: "Все сотрудники" } },
  {id: 1, elem: { textValue: "Константин К." } },
  {id: 2, elem: { textValue: "Полина З." } },
]

//Sources
export const DropdownSourcesItemes: DropDownItem[] = [
  {id: 0, elem: { textValue: "Все источники" } },
  {id: 1, elem: { textValue: "С сайта" } },
  {id: 2, elem: { textValue: "Телефон" } },
]

//Rating
export const DropdownRatingItems: DropDownItem[] = [
  {id: 0, elem: { textValue: "Все оценки" } },
  {id: 1, elem: { textValue: "Распознать" } },
  {id: 2, elem: { textValue: "Скрипт не использован" } },
  {id: 3, elem: { jsx: <Rating rating={RatingEnum.Badly} /> } },
  {id: 4, elem: { jsx: <Rating rating={RatingEnum.Good} /> } },
  {id: 5, elem: { jsx: <Rating rating={RatingEnum.Well} /> } },

]
