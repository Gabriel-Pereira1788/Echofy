import React from 'react';

import {Book as BookData, BookSection} from '@domain';
import {getDynamicSize} from '@utils';

import {Book, TouchableOpacityBox} from '@components';

import {HomeScreenBestSellerCard} from './HomeScreenBestSellerCard';

type Props = {
  book: BookData;
  sectionIdentify: BookSection['identify'];
};
export function HomeScreenBookSectionItem({book, sectionIdentify}: Props) {
  if (sectionIdentify === 'best-seller') {
    return <HomeScreenBestSellerCard book={book} />;
  }

  const {dynamicWidth, dynamicHeight} = getDynamicSize({
    widthPercentage: sectionIdentify === 'recommended-for-you' ? 85 : 50,
    heightPercentage: sectionIdentify === 'recommended-for-you' ? 55 : 40,
  });

  return (
    <TouchableOpacityBox
      activeOpacity={0.8}
      boxProps={{
        flex: 1,
        width: dynamicWidth,
        height: dynamicHeight,
        marginBottom: 'sp50',
      }}>
      <Book
        book={book}
        renderAuthor={sectionIdentify !== 'recommended-for-you'}
      />
    </TouchableOpacityBox>
  );
}
