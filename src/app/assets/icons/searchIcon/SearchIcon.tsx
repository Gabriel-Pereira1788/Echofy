import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {IconBase} from '@components';

export function SearchIcon({size, color, type}: IconBase) {
  if (type === 'bold') {
    return (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 10.6699C2 5.88166 5.84034 2 10.5776 2C12.8526 2 15.0343 2.91344 16.6429 4.53936C18.2516 6.16529 19.1553 8.37052 19.1553 10.6699C19.1553 15.4582 15.3149 19.3399 10.5776 19.3399C5.84034 19.3399 2 15.4582 2 10.6699ZM19.0134 17.6543L21.568 19.7164H21.6124C22.1292 20.2388 22.1292 21.0858 21.6124 21.6082C21.0955 22.1306 20.2576 22.1306 19.7407 21.6082L17.6207 19.1785C17.4203 18.9766 17.3076 18.7024 17.3076 18.4164C17.3076 18.1304 17.4203 17.8562 17.6207 17.6543C18.0072 17.2704 18.6268 17.2704 19.0134 17.6543Z"
          fill={color}
        />
      </Svg>
    );
  }
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.6115 2C6.30323 2 2 6.20819 2 11.3993C2 16.5903 6.30323 20.7985 11.6115 20.7985C13.8819 20.7985 15.9684 20.0287 17.613 18.7415L20.7371 21.7886L20.8202 21.8586C21.1102 22.0685 21.5214 22.0446 21.7839 21.7873C22.0726 21.5043 22.072 21.0459 21.7825 20.7636L18.6952 17.7523C20.2649 16.0794 21.2231 13.8487 21.2231 11.3993C21.2231 6.20819 16.9198 2 11.6115 2ZM11.6115 3.44774C16.1022 3.44774 19.7426 7.00776 19.7426 11.3993C19.7426 15.7908 16.1022 19.3508 11.6115 19.3508C7.12086 19.3508 3.48044 15.7908 3.48044 11.3993C3.48044 7.00776 7.12086 3.44774 11.6115 3.44774Z"
        fill={color}
      />
    </Svg>
  );
}
