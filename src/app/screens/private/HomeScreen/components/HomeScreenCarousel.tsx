import React, {useCallback, useRef} from 'react';
import {Animated, ListRenderItemInfo, StatusBar, View} from 'react-native';

import {
  Book as BookType,
  CategoryIdentify,
  useGetBookListByCategory,
} from '@domain';
import {dimensions} from '@utils';

import {Box} from '@components';

import {HomeScreenBackdrop} from './HomeScreenBackdrop';
import {HomeScreenBookItem, ITEM_SIZE} from './HomeScreenBookItem';

type Props = {
  identify: CategoryIdentify;
};

const EMPTY_ITEM_SIZE = (dimensions.width - ITEM_SIZE) / 2;

export function HomeScreenCarousel({identify}: Props) {
  const {list} = useGetBookListByCategory(identify);

  const scrollX = useRef(new Animated.Value(0)).current;

  const renderItem = useCallback(
    ({item, index}: ListRenderItemInfo<BookType>) => {
      return (
        <>
          {index === 0 && <View style={{width: EMPTY_ITEM_SIZE}} />}
          <HomeScreenBookItem item={item} index={index} scrollX={scrollX} />

          {index === list.length - 1 && (
            <View style={{width: EMPTY_ITEM_SIZE}} />
          )}
        </>
      );
    },

    [scrollX, list],
  );

  return (
    <Box
      width={'100%'}
      height={'100%'}
      top={0}
      flex={1}
      marginBottom="sp10"
      alignItems="center"
      justifyContent="center">
      <StatusBar translucent />
      <Box width={'100%'} marginBottom="sp10" height={700}>
        <HomeScreenBackdrop list={list} scrollX={scrollX} />

        <Animated.FlatList
          testID={'carousel'}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: true},
          )}
          bounces={false}
          initialScrollIndex={0}
          decelerationRate={0}
          scrollEventThrottle={16}
          data={list}
          showsHorizontalScrollIndicator={false}
          snapToAlignment="start"
          snapToInterval={ITEM_SIZE}
          renderItem={renderItem}
          horizontal
          contentContainerStyle={{
            alignItems: 'center',
          }}
        />
      </Box>
    </Box>
  );
}
