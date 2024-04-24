import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Book} from '@domain';

import {Box} from '@components';

import SearchingSkeleton from '../skeletons/SearchingSkeleton';

import SearchScreenLatestList from './SearchScreenLatestList';
import {SearchScreenRecommendedCategories} from './SearchScreenRecommendedCategories';
import {SearchScreenResultsList} from './SearchScreenResultsList';

export type SearchScreenMainContentProps = {
  isLoading: boolean;
  renderSearchHistory: boolean;
  loadingNextPage: boolean;
  list: Book[];
};

export function SearchScreenMainContent({
  isLoading,
  loadingNextPage,
  renderSearchHistory,
  list,
}: SearchScreenMainContentProps) {
  return (
    <Box flex={1} marginTop="sp10" width={'100%'}>
      {isLoading && !renderSearchHistory && <SearchingSkeleton />}
      {renderSearchHistory ? (
        <Box gap="sp20">
          <SearchScreenRecommendedCategories />
          <SearchScreenLatestList />
        </Box>
      ) : (
        <SearchScreenResultsList books={list} />
      )}

      {loadingNextPage && (
        <ActivityIndicator testID="loading-next-page" size={20} />
      )}
    </Box>
  );
}
