import React, {useCallback, useState} from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';

import {useBookFindByText} from '@domain';
import {SharedBrandHeader, SharedWrapperScreen} from '@shared';
import {useSearchHistoryActions} from '@store';

import {Box} from '@components';
import {useScrollEndReached} from '@hooks';

import {SearchScreenExploreInput} from './components/SearchScreenExploreInput';
import SearchScreenLatestList from './components/SearchScreenLatestList';
import {SearchScreenRecommendedCategories} from './components/SearchScreenRecommendedCategories';
import {SearchScreenResultsList} from './components/SearchScreenResultsList';

export function SearchScreen() {
  const [searchText, setSearchText] = useState('');

  const {onScroll} = useScrollEndReached(handleOnEndReached);
  const {addToSearchHistory} = useSearchHistoryActions();

  const {list, hasNextPage, getMore, loadingNextPage} =
    useBookFindByText(searchText);

  const handleOnChangeText = useCallback((text: string) => {
    setSearchText(text);
  }, []);

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
              addToSearchHistory={addToSearchHistory}
            />
          ) : (
            <SearchScreenLatestList />
          )}

          {loadingNextPage && <ActivityIndicator size={20} />}
        </Box>
      </ScrollView>
    </SharedWrapperScreen>
  );
}
