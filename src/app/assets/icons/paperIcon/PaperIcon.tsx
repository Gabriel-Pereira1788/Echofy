import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {IconBase} from '@components';

export function PaperIcon({size, color}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 18 20" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.6065 0.0117C11.5634 0.00401204 11.5191 0 11.4738 0C11.4285 0 11.3842 0.00401204 11.3411 0.0117H5.08351C2.59622 0.0117 0.499512 2.02953 0.499512 4.4907V15.2037C0.499512 17.8043 2.50411 19.8647 5.08351 19.8647H13.0725C15.5258 19.8647 17.5515 17.7028 17.5515 15.2037V6.0377C17.5515 5.84408 17.4766 5.65797 17.3425 5.5183L12.2775 0.242299C12.1361 0.0949779 11.9407 0.0117 11.7365 0.0117H11.6065ZM10.7238 1.5109L5.08351 1.5117C3.41205 1.5117 1.99951 2.8711 1.99951 4.4907V15.2037C1.99951 16.9849 3.3419 18.3647 5.08351 18.3647H13.0725C14.6748 18.3647 16.0515 16.8954 16.0515 15.2037L16.0509 6.98309L15.1754 6.98607C14.8417 6.98566 14.4622 6.98496 14.0402 6.984C12.2707 6.98026 10.8265 5.59329 10.7291 3.84739L10.7238 3.659V1.5109ZM15.23 5.48384L14.0435 5.484C13.038 5.48188 12.2238 4.66546 12.2238 3.659V2.35245L15.23 5.48384ZM11.2838 12.8076C11.698 12.8076 12.0338 13.1434 12.0338 13.5576C12.0338 13.9373 11.7517 14.2511 11.3856 14.3008L11.2838 14.3076H5.88681C5.4726 14.3076 5.13681 13.9718 5.13681 13.5576C5.13681 13.1779 5.41897 12.8641 5.78504 12.8144L5.88681 12.8076H11.2838ZM9.99231 8.6054C9.99231 8.19119 9.65653 7.8554 9.24231 7.8554H5.88631L5.78454 7.86225C5.41847 7.91191 5.13631 8.2257 5.13631 8.6054C5.13631 9.01961 5.4721 9.3554 5.88631 9.3554H9.24231L9.34408 9.34855C9.71016 9.29889 9.99231 8.9851 9.99231 8.6054Z"
        fill={color}
      />
    </Svg>
  );
}