import React from 'react';

import {Book} from '@domain';
import {SkeletonsList} from '@super-components';

import {ActivityIndicator, BookSkeleton, Box} from '@components';

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
      {isLoading && !renderSearchHistory && (
        <SkeletonsList
          containerType="column"
          itensToRender={8}
          renderItem={index => (
            <BookSkeleton key={index} renderAuthor renderTitle />
          )}
        />
      )}
      {renderSearchHistory ? (
        <Box gap="sp20">
          <SearchScreenRecommendedCategories />
          <SearchScreenLatestList />
        </Box>
      ) : (
        <SearchScreenResultsList books={list} />
      )}

      {loadingNextPage && <ActivityIndicator testID="loading-next-page" />}
    </Box>
  );
}
