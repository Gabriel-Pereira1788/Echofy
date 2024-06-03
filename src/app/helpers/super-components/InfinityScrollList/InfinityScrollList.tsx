import React from 'react';
import {
  FlatList,
  FlatListProps,
  ListRenderItemInfo,
  RefreshControl,
} from 'react-native';

import {Queries} from '@domain';
import {usePaginatedList} from '@infra';

import {ActivityIndicator} from '@components';

import EmptyState from './EmptyState';

interface InfinityScrollListProps<TItem> {
  queryKey: Queries;
  flatListProps?: Partial<
    Omit<FlatListProps<TItem>, 'renderItem' | 'ListHeaderComponent'>
  >;
  renderItem: (props: ListRenderItemInfo<TItem>) => JSX.Element;
  fetchPage: Parameters<typeof usePaginatedList<TItem>>[0]['fetchPage'];
  renderHeaderComponent?: (list: TItem[]) => JSX.Element;
  LoadingComponent?: JSX.Element;
  emptyStateProps?: {
    title: string;
    message: string;
  };
}

export function InfinityScrollList<TItem>({
  queryKey,
  renderItem,
  fetchPage,
  emptyStateProps,
  flatListProps,
  renderHeaderComponent,
  LoadingComponent,
}: InfinityScrollListProps<TItem>) {
  const {list, refresh, getMore, isLoading, loadingNextPage} = usePaginatedList(
    {
      queryKey: [queryKey],
      fetchPage,
    },
  );

  if (isLoading && LoadingComponent) {
    return LoadingComponent;
  }
  return (
    <FlatList
      bounces={false}
      refreshing={isLoading}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refresh} />
      }
      style={{width: '100%'}}
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}
      data={list}
      renderItem={renderItem}
      ListFooterComponent={loadingNextPage ? <ActivityIndicator /> : undefined}
      ListHeaderComponent={
        renderHeaderComponent ? renderHeaderComponent(list) : undefined
      }
      ListEmptyComponent={
        emptyStateProps && <EmptyState {...emptyStateProps!} />
      }
      onEndReachedThreshold={0.3}
      onEndReached={() => getMore()}
      {...flatListProps}
    />
  );
}
