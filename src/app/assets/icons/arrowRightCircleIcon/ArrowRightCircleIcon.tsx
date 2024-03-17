import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {IconBase} from '@components';

export function ArrowRightCircleIcon({size, color}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.33333 19.9998C3.33333 29.2046 10.7958 36.6665 20 36.6665C29.2042 36.6665 36.6667 29.2046 36.6667 19.9998C36.6667 10.7961 29.2037 3.33317 20 3.33317C10.7963 3.33317 3.33333 10.7961 3.33333 19.9998ZM5.83333 19.9998C5.83333 12.1769 12.177 5.83317 20 5.83317C27.823 5.83317 34.1667 12.1769 34.1667 19.9998C34.1667 27.8239 27.8236 34.1665 20 34.1665C12.1764 34.1665 5.83333 27.8239 5.83333 19.9998ZM16.5928 25.0393C16.2287 25.5279 16.2675 26.2224 16.7103 26.6671C17.1974 27.1563 17.9889 27.1581 18.4781 26.671L24.2881 20.886L24.4097 20.7456C24.7747 20.2555 24.7342 19.5585 24.2881 19.1144L18.4781 13.3294L18.3376 13.2086C17.8475 12.8466 17.1531 12.8885 16.7103 13.3332L16.5896 13.4736C16.2276 13.9638 16.2694 14.6581 16.7141 15.101L21.6333 20.0018L16.7141 24.8994L16.5928 25.0393Z"
        fill={color}
      />
    </Svg>
  );
}