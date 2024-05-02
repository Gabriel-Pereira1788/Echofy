import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  FlatListProps,
  ListRenderItemInfo,
  RefreshControl,
} from 'react-native';

import {Queries} from '@domain';
import {usePaginatedList} from '@infra';

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
  const {list, refresh, getMore, isLoading, refreshing, loadingNextPage} =
    usePaginatedList({
      queryKey: [queryKey],
      fetchPage,
    });

  if (isLoading && LoadingComponent) {
    return LoadingComponent;
  }
  return (
    <FlatList
      bounces={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refresh} />
      }
      style={{width: '100%'}}
      contentContainerStyle={{flexGrow: 1}}
      data={list}
      renderItem={renderItem}
      ListFooterComponent={
        loadingNextPage ? <ActivityIndicator size={20} /> : undefined
      }
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
