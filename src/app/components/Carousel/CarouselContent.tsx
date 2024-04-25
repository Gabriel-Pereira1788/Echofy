import React, {useCallback} from 'react';
import {FlatList, ListRenderItemInfo, ViewToken} from 'react-native';

import {dimensions} from '@utils';

import {Box} from '../Box/Box';

type CarouselContentProps<TContent> = {
  content: TContent[];
  renderItem: ({item}: ListRenderItemInfo<TContent>) => JSX.Element;
  onChangeContent: (position: number) => void;

  flatListRef?: React.RefObject<FlatList<any>>;
};

const viewConfig = {
  waitForInteraction: true,
  viewAreaCoveragePercentThreshold: 20,
};

export function CarouselContent<TContent>({
  content,
  renderItem,
  flatListRef,
  onChangeContent,
}: CarouselContentProps<TContent>) {
  const _renderItem = useCallback(
    (itemInfo: ListRenderItemInfo<TContent>) => {
      return (
        <Box
          width={dimensions.width - 28}
          justifyContent="flex-start"
          alignItems="flex-start">
          {renderItem(itemInfo)}
        </Box>
      );
    },
    [renderItem],
  );

  function onViewableItemsChanged(info: {
    viewableItems: ViewToken[];
    changed: ViewToken[];
  }) {
    const _currentIndex = info.viewableItems[0].index;

    if (_currentIndex !== null) {
      onChangeContent(_currentIndex);
    }
  }

  return (
    <FlatList
      ref={flatListRef}
      showsHorizontalScrollIndicator={false}
      snapToInterval={dimensions.width}
      snapToAlignment="start"
      bounces={false}
      decelerationRate="fast"
      horizontal
      data={content}
      onViewableItemsChanged={onViewableItemsChanged}
      pagingEnabled
      ItemSeparatorComponent={() => <Box width={20} />}
      viewabilityConfig={viewConfig}
      renderItem={_renderItem}
      getItemLayout={(data, index) => ({
        length: dimensions.width,
        offset: dimensions.width * index,
        index,
      })}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    />
  );
}
