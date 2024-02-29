import React, {useCallback, useState} from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';

import {useBookFindByText} from '@domain';
import {CommonStackProps} from '@router';
import {SharedBrandHeader, SharedWrapperScreen} from '@shared';

import {Box} from '@components';
import {useScrollEndReached} from '@hooks';

import {SearchScreenExploreInput} from './components/SearchScreenExploreInput';
import SearchScreenLatestList from './components/SearchScreenLatestList';
import {SearchScreenRecommendedCategories} from './components/SearchScreenRecommendedCategories';
import {SearchScreenResultsList} from './components/SearchScreenResultsList';

export function SearchScreen({}: CommonStackProps<'MainScreen'>) {
  const [searchText, setSearchText] = useState('');

  const {list, hasNextPage, getMore, loadingNextPage} =
    useBookFindByText(searchText);

  const renderSearchHistory =
    (list && list.length === 0) || searchText.trim() === '';

  const {onScroll} = useScrollEndReached(handleOnEndReached);

  const handleOnChangeText = useCallback((text: string) => {
    setSearchText(text);
  }, []);

  function handleOnEndReached() {
    hasNextPage && getMore();
  }

  return (
    <SharedWrapperScreen>
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        onScroll={onScroll}>
        <SharedBrandHeader />
        <SearchScreenExploreInput onChangeText={handleOnChangeText} />
        <SearchScreenRecommendedCategories />
        <Box flex={1} marginTop="sp50" width={'100%'}>
          {renderSearchHistory ? (
            <SearchScreenLatestList />
          ) : (
            <SearchScreenResultsList books={list} />
          )}

          {loadingNextPage && <ActivityIndicator size={20} />}
        </Box>
      </ScrollView>
    </SharedWrapperScreen>
  );
}
