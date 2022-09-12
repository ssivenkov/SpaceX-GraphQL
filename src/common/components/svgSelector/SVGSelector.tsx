import React from 'react';

import { SvgSelectorPropsType } from './types';

export const SvgSelector = (props: SvgSelectorPropsType) => {
  const { id } = props;

  switch (id) {
    case 'leftArrow': {
      return (
        <svg
          height='306px'
          viewBox='0 0 306 306'
          width='306px'
          x='0px'
          xmlSpace='preserve'
          y='0px'
        >
          <g>
            <g id='chevron-left'>
              <polygon points='247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153' />
            </g>
          </g>
        </svg>
      );
    }
    case 'rightArrow': {
      return (
        <svg
          height='306px'
          viewBox='0 0 306 306'
          width='306px'
          x='0px'
          xmlSpace='preserve'
          y='0px'
        >
          <g>
            <g id='keyboard-arrow-right'>
              <polygon points='58.65,267.75 175.95,153 58.65,35.7 94.35,0 247.35,153 94.35,306' />
            </g>
          </g>
        </svg>
      );
    }
    default:
      return <svg />;
  }
};
