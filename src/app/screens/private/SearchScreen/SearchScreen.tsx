import React, {useCallback, useState} from 'react';

import {useBookFindByText} from '@domain';
import {SharedWrapperScreen} from '@shared';

import {Box, Icon, TouchableOpacityBox} from '@components';

import {SearchScreenExploreInput} from './components/SearchScreenExploreInput';
import SearchScreenLatestList from './components/SearchScreenLatestList';
import {SearchScreenRecommendedCategories} from './components/SearchScreenRecommendedCategories';
import {SearchScreenResultsList} from './components/SearchScreenResultsList';

export function SearchScreen() {
  const [searchText, setSearchText] = useState('');
  const {list, hasNextPage, getMore} = useBookFindByText(searchText);

  const handleOnChangeText = useCallback((text: string) => {
    setSearchText(text);
  }, []);

  function handleOnEndReached() {
    hasNextPage && getMore();
  }

  return (
    <SharedWrapperScreen
      scrollEnabled
      showLogo
      headerRight={
        <TouchableOpacityBox>
          <Icon iconName="settings" size="sp23" color="baseIconColor" />
        </TouchableOpacityBox>
      }>
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
      </Box>
    </SharedWrapperScreen>
  );
}
