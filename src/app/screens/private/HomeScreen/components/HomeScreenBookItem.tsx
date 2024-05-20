import React from 'react';
import {Animated, Image} from 'react-native';

import {Book as BookType} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, ReviewVoteRating, Text, TouchableOpacityBox} from '@components';
import {useTheme} from '@hooks';

export const ITEM_SIZE = 220;

type Props = {
  scrollX: Animated.Value;
  index: number;
  item: BookType;
};

export function HomeScreenBookItem({scrollX, index, item}: Props) {
  const theme = useTheme();
  const navigation = useNavigation();
  const inputRange = [
    (index - 1) * ITEM_SIZE,
    index * ITEM_SIZE,
    (index + 1) * ITEM_SIZE,
  ];

  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [100, 50, 100],
    extrapolate: 'clamp',
  });

  function redirectToBookScreen() {
    navigation.navigate('BookDetailsScreen', item);
  }
  return (
    <TouchableOpacityBox
      testID="book-item"
      onPress={redirectToBookScreen}
      activeOpacity={0.8}
      boxProps={{
        width: ITEM_SIZE,
      }}>
      <Animated.View
        testID={'animated-book-item'}
        style={{
          backgroundColor: theme.colors.bgMain,
          padding: 20,
          marginHorizontal: 5,
          borderRadius: 34,
          justifyContent: 'space-between',
          gap: 15,
          alignItems: 'center',
          transform: [{translateY}],
        }}>
        <Image
          testID="book-image"
          style={{
            height: ITEM_SIZE * 1.1,
            width: '100%',
            borderRadius: 17,
            resizeMode: 'cover',
          }}
          source={{uri: item.bookImage}}
        />
        <Box alignItems="flex-start" gap="sp10">
          <Text text={item.bookTitle} preset="medium/16" />
          <Text text={item.bookAuthor} preset="regular/14" />
          <ReviewVoteRating rating={5} size="sp10" />
          <Text
            align="left"
            preset="regular/14"
            text={
              item.bookDesc.length > 50
                ? item.bookDesc.slice(0, 50).trim() + '...'
                : item.bookDesc.trim()
            }
          />
        </Box>
      </Animated.View>
    </TouchableOpacityBox>
  );
}
