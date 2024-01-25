import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {ImageCommonType} from '@components';

export function EllipseStroke({width, height}: ImageCommonType) {
  return (
    <Svg
      width={width ? width : '224'}
      height={height ? height : '155'}
      viewBox="0 0 224 155"
      fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 76.5719C82.4745 76.5719 149.333 6.38992 149.333 -80.1839C149.333 -166.758 82.4745 -236.94 0 -236.94C-82.4745 -236.94 -149.333 -166.758 -149.333 -80.1839C-149.333 6.38992 -82.4745 76.5719 0 76.5719ZM0 154.95C123.712 154.95 224 49.6768 224 -80.1839C224 -210.045 123.712 -315.318 0 -315.318C-123.712 -315.318 -224 -210.045 -224 -80.1839C-224 49.6768 -123.712 154.95 0 154.95Z"
        fill="#4838D1"
      />
    </Svg>
  );
}
