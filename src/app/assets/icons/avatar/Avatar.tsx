import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {IconBase} from '@components';

export function Avatar({size, color}: IconBase) {
  return (
    <Svg width={size} height={size}>
      <Path
        fill={color}
        d="m169,.5a169,169 0 1,0 2,0zm0,86a76,76 0 1
  1-2,0zM57,287q27-35 67-35h92q40,0 67,35a164,164 0 0,1-226,0"
      />
    </Svg>
  );
}
