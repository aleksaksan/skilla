import React from 'react';
import { SvgIncoming } from './SvgFiles/SvgInOutCall/SvgIncoming';
import { SvgOutcoming } from './SvgFiles/SvgInOutCall/SvgOutcoming';

export type SvgInOutCallProps = {
  callsType: 'incoming' | 'outcoming',
  missed?: boolean,
}

export const SvgInOutCall = (props: SvgInOutCallProps) => {
  
  switch (props.callsType) {
    case 'incoming':
      return <SvgIncoming missed={props.missed} />
    case 'outcoming':
      return <SvgOutcoming missed={props.missed} />
    default:
      return <></>
  }
  
}
