import React from 'react';
import { ButtonIconsEnum } from '../../shared/enums/ButtonIconsEnum';
import { SvgChevronDown } from './SvgFiles/SvgButtonsIcons/SvgChevronDown';
import { SvgChevronUp } from './SvgFiles/SvgButtonsIcons/SvgChevronUp';
import { SvgCross } from './SvgFiles/SvgButtonsIcons/SvgCross';
import { SvgExit } from './SvgFiles/SvgButtonsIcons/SvgExit';
import { SvgQuestion } from './SvgFiles/SvgButtonsIcons/SvgQuestion';
import { SvgQuestionBig } from './SvgFiles/SvgButtonsIcons/SvgQuestionBig';

export type SvgButtonIconsProps = {
  SvgIcon: ButtonIconsEnum,
}

export const SvgButtonIcons = (props: SvgButtonIconsProps) => {
  switch (props.SvgIcon) {
    case ButtonIconsEnum.ChevronDown:
      return <SvgChevronDown />
    case ButtonIconsEnum.ChevronUp:
      return <SvgChevronUp />
    case ButtonIconsEnum.Cross:
      return <SvgCross />
    case ButtonIconsEnum.Exit:
      return <SvgExit />
    case ButtonIconsEnum.Question:
      return <SvgQuestion />
    case ButtonIconsEnum.QuestionBig:
      return <SvgQuestionBig />
    default:
      return <></>
  }
}
