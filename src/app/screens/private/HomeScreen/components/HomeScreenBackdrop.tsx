import React, {useCallback} from 'react';
import {Animated, ListRenderItemInfo, StyleSheet} from 'react-native';

import {Book} from '@domain';
import {dimensions} from '@utils';

import {Box, BoxGradient} from '@components';

import {ITEM_SIZE} from './HomeScreenBookItem';

type Props = {
  scrollX: Animated.Value;
  list: Book[];
};

export function HomeScreenBackdrop({scrollX, list}: Props) {
  const renderItem = useCallback(
    ({item, index}: ListRenderItemInfo<Book>) => {
      const inputRange = [
        (index - 1) * ITEM_SIZE,
        index * ITEM_SIZE,
        (index + 1) * ITEM_SIZE,
      ];
      const opacity = scrollX.interpolate({
        inputRange,
        outputRange: [-0.6, 0.7, -0.6],
      });
      return (
        <Animated.Image
          style={[
            StyleSheet.absoluteFill,
            {
              width: dimensions.width,
              height: dimensions.height * 0.65,
              opacity,
            },
          ]}
          resizeMode="cover"
          source={{uri: item.bookImage}}
        />
      );
    },
    [scrollX],
  );
  return (
    <Box
      position="absolute"
      top={-30}
      height={dimensions.height}
      backgroundColor="bgMain">
      <Animated.FlatList
        removeClippedSubviews={false}
        testID={'backdrop-list'}
        data={list}
        horizontal
        contentContainerStyle={{
          width: dimensions.width,
          flexGrow: 1,
        }}
        renderItem={renderItem}
      />

      <BoxGradient
        colors={['transparent', 'transparent', 'bgMain', 'bgMain']}
        position="absolute"
        width={'100%'}
        height={'100%'}
      />
    </Box>
  );
}
