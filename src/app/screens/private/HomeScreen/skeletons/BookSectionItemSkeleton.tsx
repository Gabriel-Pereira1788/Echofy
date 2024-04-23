import React from 'react';

import {BookSection} from '@domain';
import {getDynamicSize} from '@utils';

import {BestSellerCardSkeleton, BookSkeleton} from '@components';

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

  if (sectionIdentify === 'best-seller') {
    return <BestSellerCardSkeleton />;
  }
  return (
    <BookSkeleton
      size={size}
      renderAuthor={sectionIdentify !== 'recommended-for-you'}
      renderTitle={sectionIdentify !== 'recommended-for-you'}
    />
  );
}
