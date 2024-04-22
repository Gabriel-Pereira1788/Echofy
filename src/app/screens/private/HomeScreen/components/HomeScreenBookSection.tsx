import React, {useCallback, useRef} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {
  Book,
  Book as BookData,
  BookSection,
  useGetBookListByCategory,
} from '@domain';
import {useNavigation} from '@react-navigation/native';
import {dimensions, getDynamicSize} from '@utils';

import {Box, Text, TouchableOpacityBox} from '@components';

import {HomeScreenBookSectionItem} from './HomeScreenBookSectionItem';
import {HomeScreenBookSectionSkeleton} from './HomeScreenBookSectionSkeleton';

export interface HomeScreenBookSectionProps {
  sectionIdentify: BookSection['identify'];
  sectionTitle: string;
}

export function HomeScreenBookSection({
  sectionIdentify,

  sectionTitle,
}: HomeScreenBookSectionProps) {
  const navigation = useNavigation();

  const flatListRef = useRef<FlatList<Book>>(null);

  const {list, getMore, loadingNextPage} =
    useGetBookListByCategory(sectionIdentify);

  function onEndReached() {
    getMore();
  }
  const renderItem: ListRenderItem<BookData> = useCallback(
    ({item}) => {
      return (
        <HomeScreenBookSectionItem
          book={item}
          sectionIdentify={sectionIdentify}
        />
      );
    },
    [sectionIdentify],
  );

  const renderFooterComponent = () => {
    return (
      <Box
        marginHorizontal="sp25"
        height={'100%'}
        alignItems="center"
        justifyContent="center">
        {loadingNextPage && <ActivityIndicator size={20} />}
      </Box>
    );
  };

  function redirectToCategoryBookScreen() {
    navigation.navigate('CategoryBookScreen', {
      categoryIdentify: sectionIdentify,
      categoryTitle: sectionTitle,
    });
  }
  return (
    <Box
      width={'100%'}
      flex={1}
      gap="sp10"
      testID="book-section"
      marginBottom={
        sectionIdentify === 'best-seller' ||
        sectionIdentify === 'recommended-for-you'
          ? 'sp16'
          : 'sp23'
      }>
      <Box
        width={'100%'}
        alignItems="center"
        justifyContent="space-between"
        paddingHorizontal="sp25"
        marginBottom="sp10"
        flexDirection="row">
        <Text text={sectionTitle} preset="medium/16" color="base" />

        <TouchableOpacityBox onPress={redirectToCategoryBookScreen}>
          <Text text="See more" color="textActive" preset="medium/14" />
        </TouchableOpacityBox>
      </Box>
      {/* {true && <HomeScreenBookSectionSkeleton />} */}
      <FlatList
        testID="section-books"
        ref={flatListRef}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        decelerationRate={'fast'}
        onEndReached={onEndReached}
        ListFooterComponent={renderFooterComponent}
        initialNumToRender={3}
        maxToRenderPerBatch={5}
        onEndReachedThreshold={0.2}
        snapToInterval={snapToInterval(sectionIdentify)}
        ListEmptyComponent={
          <HomeScreenBookSectionSkeleton sectionIdentify={sectionIdentify} />
        }
        showsHorizontalScrollIndicator={false}
        style={{
          flex: 1,
        }}
        data={list}
        renderItem={renderItem}
        contentContainerStyle={$contentContainerStyle}
      />
    </Box>
  );
}

const snapToInterval = (sectionIdentify: BookSection['identify']) => {
  const {dynamicWidth} = getDynamicSize({
    widthPercentage: sectionIdentify === 'recommended-for-you' ? 85 : 50,
  });
  const width = dimensions.width;
  return sectionIdentify === 'recommended-for-you'
    ? width - 50
    : width - dynamicWidth - 50;
};

const $contentContainerStyle: StyleProp<ViewStyle> = {
  flexGrow: 1,
  paddingHorizontal: 16,
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  gap: 15,
};
