import React from 'react';
import { SvgInOutCallProps } from './SvgIncoming';

export const SvgOutcoming = (props: SvgInOutCallProps) => {
  return (
    <>
      {props.missed ?
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-1.04904e-05 11.3447L1.17703 12.5217L10.8522 2.8466L10.8522 8.34782H12.5217L12.5217 -1.04904e-05L4.1739 -1.04904e-05V1.66955L9.67512 1.66955L-1.04904e-05 11.3447Z" fill="#EA1A4F"/>
        </svg>
        :
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-1.04904e-05 11.3447L1.17703 12.5217L10.8522 2.8466L10.8522 8.34782H12.5217L12.5217 -1.04904e-05L4.1739 -1.04904e-05V1.66955L9.67512 1.66955L-1.04904e-05 11.3447Z" fill="#28A879"/>
        </svg>
      }
    </>
  )
}
