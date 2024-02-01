import React, {useCallback} from 'react';
import {FlatList, ListRenderItem} from 'react-native';

import {BookSection, useBookSections} from '@domain';
import {SharedWrapperScreen} from '@shared';

import {Box, Icon} from '@components';

import {HomeScreenBookSection} from './components/HomeScreenBookSection';
import {HomeScreenCategories} from './components/HomeScreenCategories';

export function HomeScreen() {
  const {bookSections} = useBookSections();

  const renderItem: ListRenderItem<BookSection> = useCallback(
    ({item, index}) => {
      return (
        <HomeScreenBookSection
          sectionOrder={index}
          sectionBooks={item.books}
          sectionTitle={item.title}
        />
      );
    },
    [],
  );
  return (
    <SharedWrapperScreen
      showLogo
      customPadding
      headerRight={
        <Icon iconName="settings" size="sp23" color="baseIconColor" />
      }>
      <Box flex={1}>
        <FlatList
          data={bookSections}
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{flexGrow: 1}}
          ListHeaderComponent={<HomeScreenCategories />}
          keyExtractor={(_, index) => String(index)}
          renderItem={renderItem}
        />
      </Box>
    </SharedWrapperScreen>
  );
}
