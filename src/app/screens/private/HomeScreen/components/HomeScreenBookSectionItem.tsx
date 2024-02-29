import React from 'react';

import {Book as BookData, BookSection} from '@domain';
import {useNavigation} from '@react-navigation/native';
import {dimensions, getDynamicSize} from '@utils';

import {Book, Box, TouchableOpacityBox} from '@components';

import {HomeScreenBestSellerCard} from './HomeScreenBestSellerCard';

type Props = {
  book: BookData;
  sectionIdentify: BookSection['identify'];
};
export function HomeScreenBookSectionItem({book, sectionIdentify}: Props) {
  const navigation = useNavigation();

  const {dynamicWidth, dynamicHeight} = getDynamicSize({
    widthPercentage: 85,
    heightPercentage: 55,
  });

  function redirectToBookScreen() {
    navigation.navigate('DetailsBookScreen', {
      id: book.id,
    });
  }

  if (sectionIdentify === 'best-seller') {
    return (
      <TouchableOpacityBox
        activeOpacity={0.8}
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
    <Box flex={1} marginBottom="sp28">
      <Book
        book={book}
        size={
          sectionIdentify === 'recommended-for-you'
            ? {height: dynamicHeight, width: dynamicWidth}
            : undefined
        }
        onPress={redirectToBookScreen}
        renderTitle={sectionIdentify !== 'recommended-for-you'}
      />
    </Box>
  );
}
