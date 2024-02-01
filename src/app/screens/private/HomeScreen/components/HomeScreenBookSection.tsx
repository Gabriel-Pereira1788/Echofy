import React, {useCallback} from 'react';
import {FlatList, ListRenderItem, StyleProp, ViewStyle} from 'react-native';

import {Book as BookData} from '@domain';
import {dimensions} from '@utils';

import {Book, Box, Text, TouchableOpacityBox} from '@components';

export interface HomeScreenBookSectionProps {
  sectionOrder: number;
  sectionBooks: BookData[];
  sectionTitle: string;
}

export function HomeScreenBookSection({
  sectionOrder,
  sectionBooks,
  sectionTitle,
}: HomeScreenBookSectionProps) {
  const renderItem: ListRenderItem<BookData> = useCallback(
    ({item}) => {
      const dynamicWidth = (dimensions.width / 100) * 55;
      const dynamicHeight =
        (dimensions.height / 100) * (sectionOrder === 0 ? 45 : 40);
      return (
        <TouchableOpacityBox
          activeOpacity={0.8}
          boxProps={{
            flex: 1,
            width: dynamicWidth,
            height: dynamicHeight,
          }}>
          <Book book={item} />
        </TouchableOpacityBox>
      );
    },
    [sectionOrder],
  );

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
