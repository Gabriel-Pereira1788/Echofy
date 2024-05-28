import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {IconBase} from '@components';

export function BookMarkIcon({size, color, type}: IconBase) {
  if (type === 'bold') {
    return (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.9 2H15.07C17.78 2 19.97 3.07 20 5.79V20.97C20 21.14 19.96 21.31 19.88 21.46C19.75 21.7 19.53 21.88 19.26 21.96C19 22.04 18.71 22 18.47 21.86L11.99 18.62L5.5 21.86C5.351 21.939 5.18 21.99 5.01 21.99C4.45 21.99 4 21.53 4 20.97V5.79C4 3.07 6.2 2 8.9 2ZM8.22 9.62H15.75C16.18 9.62 16.53 9.269 16.53 8.83C16.53 8.39 16.18 8.04 15.75 8.04H8.22C7.79 8.04 7.44 8.39 7.44 8.83C7.44 9.269 7.79 9.62 8.22 9.62Z"
          fill={color}
        />
      </Svg>
    );
  }
  return (
    <Svg width={size} height={size} viewBox="0 0 16 20" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.9857 0H5.01434C1.90914 0 0 1.49929 0 4.43434V18.3309C0.00448265 18.613 0.0704155 18.8782 0.192626 19.1174L0.286275 19.2719L0.384308 19.3975C0.895445 19.9969 1.7112 20.1624 2.38442 19.8037L7.974 16.6635L13.5863 19.7971C13.8368 19.9291 14.0965 19.9957 14.3608 20C14.8038 20.0001 15.2179 19.8242 15.5232 19.5112C15.8285 19.1982 16 18.7736 16 18.3309V4.25765C16 1.43503 14.0482 0 10.9857 0ZM5.01434 1.44775H10.9857C13.35 1.44775 14.5879 2.35788 14.5879 4.25765V18.3309C14.5879 18.3897 14.5652 18.446 14.5247 18.4875C14.4842 18.529 14.4293 18.5523 14.372 18.5523C14.3355 18.5517 14.2887 18.5397 14.2463 18.5173L8.6435 15.3894C8.22503 15.1576 7.72327 15.1576 7.30683 15.3883L1.71962 18.5265C1.63485 18.5715 1.51373 18.5421 1.44919 18.4519L1.41172 18.3897C1.41894 18.4 1.41764 18.3876 1.4154 18.3662C1.414 18.3528 1.41223 18.3359 1.41195 18.3189L1.41205 4.43434C1.41205 2.39579 2.61925 1.44775 5.01434 1.44775ZM12.1139 7.0405C12.1139 6.64072 11.7978 6.31663 11.4079 6.31663H4.54042L4.44462 6.32324C4.10001 6.37117 3.8344 6.67404 3.8344 7.0405C3.8344 7.44029 4.1505 7.76438 4.54042 7.76438H11.4079L11.5037 7.75777C11.8483 7.70984 12.1139 7.40697 12.1139 7.0405Z"
        fill={color}
      />
    </Svg>
  );
}
