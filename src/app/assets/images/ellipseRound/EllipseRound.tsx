import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {ImageCommonType} from '@components';

export function EllipseRound({width, height, mode}: ImageCommonType) {
  return (
    <Svg
      width={width ? width : '85'}
      height={height ? height : '132'}
      viewBox="0 0 85 132"
      fill="none">
      <Path
        d="M134 66.0762C134 102.282 104.003 131.632 67 131.632C29.9969 131.632 0 102.282 0 66.0762C0 29.8708 29.9969 0.520508 67 0.520508C104.003 0.520508 134 29.8708 134 66.0762Z"
        fill={mode && mode === 'dark' ? '#2E2E5D' : '#F77A55'}
      />
    </Svg>
  );
}
