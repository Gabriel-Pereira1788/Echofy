import React from 'react';

import {BookSection} from '@domain';
import {getDynamicSize} from '@utils';

import {Skeleton} from '@components';

type Props = {
  sectionIdentify: BookSection['identify'];
};

export function BookSectionItemSkeleton({sectionIdentify}: Props) {
  const {dynamicWidth, dynamicHeight} = getDynamicSize({
    widthPercentage: sectionIdentify === 'recommended-for-you' ? 85 : 40,
    heightPercentage: 55,
  });

  const size =
    sectionIdentify === 'recommended-for-you'
      ? {height: dynamicHeight, width: dynamicWidth}
      : {width: dynamicWidth, height: dynamicWidth};
  return (
    <Skeleton
      width={size?.width}
      height={size?.height}
      autoplay
      borderRadius="rd12"
    />
  );
}
