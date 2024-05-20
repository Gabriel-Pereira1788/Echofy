import React, {useCallback, useState} from 'react';

import {useBookFindByText} from '@domain';
import {CommonStackProps} from '@router';
import {SharedBrandHeader, SharedWrapperScreen} from '@shared';

import {useScrollEndReached} from '@hooks';

import {SearchScreenExploreInput} from './components/SearchScreenExploreInput';
import {SearchScreenMainContent} from './components/SearchScreenMainContent';

export function SearchScreen({}: CommonStackProps<'MainScreen'>) {
  const [searchText, setSearchText] = useState('');

  const {list, hasNextPage, getMore, loadingNextPage, isLoading} =
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
    <SharedWrapperScreen scrollEnabled scrollProps={{onScroll}}>
      <SharedBrandHeader />
      <SearchScreenExploreInput onChangeText={handleOnChangeText} />
      <SearchScreenMainContent
        list={list}
        isLoading={isLoading}
        loadingNextPage={loadingNextPage}
        renderSearchHistory={renderSearchHistory}
      />
    </SharedWrapperScreen>
  );
}
