import React, {useCallback, useMemo, useRef} from 'react';
import {
  ListRenderItem,
  FlatList,
  StyleProp,
  ViewStyle,
  Animated,
} from 'react-native';

import {BookSection} from '@domain';

import {Box, Category} from '@components';

import {buildBookSections} from '../functions/buildBookSections';
import {useHomeScreenState} from '../store';

export function HomeScreenCategories() {
  const bookSections = useMemo(() => buildBookSections(), []);
  const flatListRef = useRef<FlatList>(null);

  const [currentSection, setCurrentSection] =
    useHomeScreenState('currentSection');

  const renderItem: ListRenderItem<BookSection> = useCallback(
    ({item, index}) => {
      function handlePress() {
        setCurrentSection(item);
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
    [currentSection, setCurrentSection],
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
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
};
