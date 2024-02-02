import React, {useCallback} from 'react';
import {FlatList, ListRenderItem, StyleProp, ViewStyle} from 'react-native';

import {Book as BookData, BookSection} from '@domain';
import {getDynamicSize} from '@utils';

import {Box, Text, TouchableOpacityBox} from '@components';

import {HomeScreenBookSectionItem} from './HomeScreenBookSectionItem';

export interface HomeScreenBookSectionProps {
  sectionIdentify: BookSection['identify'];
  sectionBooks: BookData[];
  sectionTitle: string;
}

export function HomeScreenBookSection({
  sectionIdentify,
  sectionBooks,
  sectionTitle,
}: HomeScreenBookSectionProps) {
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

  const snapToOffsets = sectionBooks.map((book, index) => {
    const {dynamicWidth} = getDynamicSize({
      widthPercentage: sectionIdentify === 'recommended-for-you' ? 85 : 50,
    });
    const width = dynamicWidth / 0.5;
    const startScroll = (width * 3) / 4;

    return index * dynamicWidth + startScroll;
  });
  return (
    <Box width={'100%'} flex={1} gap="sp10">
      <Box
        width={'100%'}
        alignItems="center"
        justifyContent="space-between"
        paddingHorizontal="sp25"
        marginBottom="sp10"
        flexDirection="row">
        <Text text={sectionTitle} preset="medium/16" color="base" />

        <TouchableOpacityBox>
          <Text text="See more" color="textActive" preset="medium/14" />
        </TouchableOpacityBox>
      </Box>

      <FlatList
        horizontal
        pagingEnabled
        snapToAlignment="start"
        initialNumToRender={3}
        snapToOffsets={snapToOffsets}
        getItemLayout={(data, index) => {
          const {dynamicHeight} = getDynamicSize({
            heightPercentage:
              sectionIdentify === 'recommended-for-you' ? 55 : 40,
          });

          return {
            length: dynamicHeight,
            offset: dynamicHeight * index,
            index,
          };
        }}
        showsHorizontalScrollIndicator={false}
        style={{
          flex: 1,
        }}
        data={sectionBooks}
        renderItem={renderItem}
        contentContainerStyle={$contentContainerStyle}
      />
    </Box>
  );
}

const $contentContainerStyle: StyleProp<ViewStyle> = {
  flexGrow: 1,
  paddingHorizontal: 16,
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  gap: 15,
};
