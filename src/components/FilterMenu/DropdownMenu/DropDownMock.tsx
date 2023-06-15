export type DropDownItem = {
  id: string | number,
  elem: DropDownElem,
}

export type DropDownElem = {//JSX.Element | string;
  jsx?: JSX.Element,
  textValue: string,
}
export const DropdownDateItems: DropDownItem[] = [
  { id: 0, elem: { textValue: "3 дня" } },
  { id: 1, elem: { textValue: "Неделя" } },
  { id: 2, elem: { textValue: "Месяц" } },
  { id: 3, elem: { textValue: "Год" } },
  //TODO add date container { id: 4, item: ???}
]

//Calls
export const DropdownCallsItems:  DropDownItem[] = [
  {id: 0, elem: { textValue: "Все звонки" } },
  {id: 1, elem: { textValue: "Новые клиенты",  } },
  {id: 2, elem: { textValue: "Все исполнители" } },
  {id: 3, elem: { textValue: "Через приложение" } },
  {id: 4, elem: { textValue: "Прочие звонки" } },
]