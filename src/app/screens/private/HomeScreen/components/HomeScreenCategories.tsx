import React, {useCallback, useRef} from 'react';
import {
  ListRenderItem,
  FlatList,
  StyleProp,
  ViewStyle,
  Animated,
} from 'react-native';

import {BookSection} from '@domain';

import {Box, Category} from '@components';

type Props = {
  bookSections: BookSection[];
  currentSection: BookSection | null;
  onSelect: (item: BookSection) => void;
};

export function HomeScreenCategories({
  bookSections,
  onSelect,
  currentSection,
}: Props) {
  const flatListRef = useRef<FlatList>(null);

  const renderItem: ListRenderItem<BookSection> = useCallback(
    ({item, index}) => {
      function handlePress() {
        onSelect(item);
        flatListRef.current?.scrollToIndex({
          index,
          animated: true,
          viewPosition: 0.5,
        });
      }

      return (
        <Animated.View style={{marginRight: 5}}>
          <Category
            testID="category"
            text={item.title}
            onPress={handlePress}
            isSelected={currentSection?.identify === item.identify}
          />
        </Animated.View>
      );
    },
    [onSelect, currentSection],
  );

  return (
    <Box width={'100%'} alignItems="flex-start" justifyContent="flex-start">
      <FlatList
        ref={flatListRef}
        testID="category-list"
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate={'fast'}
        scrollEventThrottle={16}
        snapToAlignment={'start'}
        snapToInterval={100}
        scrollEnabled
        contentContainerStyle={$contentContainerStyle}
        data={bookSections}
        renderItem={renderItem}
        onScrollToIndexFailed={() => {}}
      />
    </Box>
  );
}

const $contentContainerStyle: StyleProp<ViewStyle> = {
  flexGrow: 1,
  gap: 10,
  paddingHorizontal: 25,
  // marginVertical: 25,
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
};
