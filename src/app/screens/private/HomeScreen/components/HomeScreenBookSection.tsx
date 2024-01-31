import React, {useCallback} from 'react';
import {FlatList, ListRenderItem, StyleProp, ViewStyle} from 'react-native';

import {Box, Text, TouchableOpacityBox} from '@components';

export interface HomeScreenBookSectionProps {
  sectionBooks: any[];
  sectionTitle: string;
}

export function HomeScreenBookSection({
  sectionBooks,
  sectionTitle,
}: HomeScreenBookSectionProps) {
  const renderItem: ListRenderItem<any> = useCallback(() => {
    return <Box width={280} height={300} backgroundColor="neutral40" />;
  }, []);

  return (
    <Box width={'100%'} flex={1} gap="sp10">
      <Box
        width={'100%'}
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row">
        <Text text={sectionTitle} preset="medium/16" color="base" />

        <TouchableOpacityBox>
          <Text text="See more" color="textActive" preset="medium/14" />
        </TouchableOpacityBox>
      </Box>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={sectionBooks}
        renderItem={renderItem}
        contentContainerStyle={$contentContainerStyle}
      />
    </Box>
  );
}

const $contentContainerStyle: StyleProp<ViewStyle> = {
  flexGrow: 1,

  justifyContent: 'flex-start',
  alignItems: 'stretch',
  gap: 10,
};
