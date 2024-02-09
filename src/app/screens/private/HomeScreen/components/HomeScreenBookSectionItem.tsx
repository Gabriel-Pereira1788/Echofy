import React from 'react';

import {Book as BookData, BookSection} from '@domain';
import {useNavigation} from '@react-navigation/native';
import {dimensions, getDynamicSize} from '@utils';

import {Book, TouchableOpacityBox} from '@components';

import {HomeScreenBestSellerCard} from './HomeScreenBestSellerCard';

type Props = {
  book: BookData;
  sectionIdentify: BookSection['identify'];
};
export function HomeScreenBookSectionItem({book, sectionIdentify}: Props) {
  const navigation = useNavigation();

  const {dynamicWidth, dynamicHeight} = getDynamicSize({
    widthPercentage: sectionIdentify === 'recommended-for-you' ? 85 : 50,
    heightPercentage: sectionIdentify === 'recommended-for-you' ? 55 : 40,
  });

  function redirectToBookScreen() {
    navigation.navigate('BookScreen', {
      id: book.id,
    });
  }

  if (sectionIdentify === 'best-seller') {
    return (
      <TouchableOpacityBox
        boxProps={{
          width: dimensions.width - 20,
        }}
        testID="best-seller-card"
        onPress={redirectToBookScreen}>
        <HomeScreenBestSellerCard book={book} />
      </TouchableOpacityBox>
    );
  }
  return (
    <TouchableOpacityBox
      testID="book-item"
      onPress={redirectToBookScreen}
      activeOpacity={0.8}
      boxProps={{
        flex: 1,
        width: dynamicWidth,
        height: dynamicHeight,
        marginBottom: 'sp50',
      }}>
      <Book
        book={book}
        renderTitle={sectionIdentify !== 'recommended-for-you'}
      />
    </TouchableOpacityBox>
  );
}
