import React, {useEffect} from 'react';
import {Animated} from 'react-native';

import {Book as BookData, BookSection} from '@domain';
import {useNavigation} from '@react-navigation/native';
import {dimensions, getDynamicSize} from '@utils';

import {Book, TouchableOpacityBox} from '@components';

import {useRenderItemAnimated} from '../hooks';

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

  const {opacity, translationY, renderItem} =
    useRenderItemAnimated(dynamicHeight);

  useEffect(() => {
    renderItem();
  }, [renderItem]);

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
    <Animated.View
      style={{
        opacity: opacity,
        transform: [{translateY: translationY}],
        flex: 1,
        marginTop: 25,
      }}>
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
    </Animated.View>
  );
}
