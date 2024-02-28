import React, {useCallback, useState} from 'react';
import {
  ActivityIndicator,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from 'react-native';

import {useBookFindByText} from '@domain';
import {SharedBrandHeader, SharedWrapperScreen} from '@shared';

import {Box} from '@components';

import {SearchScreenExploreInput} from './components/SearchScreenExploreInput';
import SearchScreenLatestList from './components/SearchScreenLatestList';
import {SearchScreenRecommendedCategories} from './components/SearchScreenRecommendedCategories';
import {SearchScreenResultsList} from './components/SearchScreenResultsList';

export function SearchScreen() {
  const [searchText, setSearchText] = useState('');
  const {list, hasNextPage, getMore, loadingNextPage} =
    useBookFindByText(searchText);

  const handleOnChangeText = useCallback((text: string) => {
    setSearchText(text);
  }, []);

  function onScroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const {layoutMeasurement, contentSize, contentOffset} = event.nativeEvent;
    const paddingBottom = 20;
    const isEndReached =
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingBottom;

    console.log('isEndReached', isEndReached);
    if (isEndReached) {
      handleOnEndReached();
    }
  }

  function handleOnEndReached() {
    hasNextPage && getMore();
  }

  return (
    <SharedWrapperScreen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        onScroll={onScroll}>
        <SharedBrandHeader />
        <SearchScreenExploreInput onChangeText={handleOnChangeText} />
        <SearchScreenRecommendedCategories />
        <Box flex={1} marginTop="sp50" width={'100%'}>
          {list && list.length > 0 ? (
            <SearchScreenResultsList
              books={list}
              onEndReached={handleOnEndReached}
            />
          ) : (
            <SearchScreenLatestList books={[]} />
          )}

          {loadingNextPage && <ActivityIndicator size={20} />}
        </Box>
      </ScrollView>
    </SharedWrapperScreen>
  );
}
