import React, {useCallback} from 'react';
import {ActivityIndicator, FlatList, ListRenderItem} from 'react-native';

import {BookSection, useBookSections} from '@domain';
import {CommonStackProps} from '@router';
import {SharedWrapperScreen} from '@shared';

import {Box} from '@components';

import {HomeScreenBookSection} from './components/HomeScreenBookSection';
import {HomeScreenHeader} from './components/HomeScreenHeader';

export function HomeScreen({}: CommonStackProps<'MainScreen'>) {
  const {isLoading, bookSections} = useBookSections();

  const renderItem: ListRenderItem<BookSection> = useCallback(({item}) => {
    return (
      <HomeScreenBookSection
        sectionBooks={item.books}
        sectionTitle={item.title}
        sectionIdentify={item.identify}
      />
    );
  }, []);

  console.log('bookSections', bookSections);

  return (
    <SharedWrapperScreen customPadding>
      <Box flex={1}>
        <FlatList
          ListHeaderComponent={<HomeScreenHeader />}
          testID="list-movies"
          data={bookSections}
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          maxToRenderPerBatch={3}
          contentContainerStyle={{flexGrow: 1}}
          keyExtractor={item => item.identify}
          renderItem={renderItem}
        />
        {isLoading && (
          <Box
            width={'100%'}
            height={'100%'}
            alignSelf="center"
            alignItems="center"
            justifyContent="center">
            <ActivityIndicator size={20} />
          </Box>
        )}
      </Box>
    </SharedWrapperScreen>
  );
}
