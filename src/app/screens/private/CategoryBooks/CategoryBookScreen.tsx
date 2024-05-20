import React, {useCallback} from 'react';
import {ListRenderItemInfo, ViewStyle} from 'react-native';

import {
  Book as BookType,
  CategoryIdentify,
  Queries,
  bookService,
} from '@domain';
import {useAuthContext} from '@providers';
import {CommonStackProps} from '@router';
import {SharedWrapperScreen} from '@shared';
import {InfinityScrollList, SkeletonsList} from '@super-components';

import {BookSkeleton} from '@components';

import {CategoryBookItem} from './components';

export function CategoryBookScreen({
  route,
}: CommonStackProps<'CategoryBookScreen'>) {
  const {uid} = useAuthContext();

  const category: CategoryIdentify =
    route && route.params
      ? route.params.categoryIdentify
      : 'recommended-for-you';

  const categoryTitle =
    route && route.params ? route.params.categoryTitle : 'Recommended For You';

  const renderItem = useCallback(({item}: ListRenderItemInfo<BookType>) => {
    return <CategoryBookItem book={item} />;
  }, []);

  return (
    <SharedWrapperScreen
      headerTitle={categoryTitle}
      goBack
      playerSpacingEnabled={false}>
      <InfinityScrollList
        LoadingComponent={
          <SkeletonsList
            containerType="column"
            itensToRender={8}
            renderItem={index => (
              <BookSkeleton key={index} renderAuthor renderTitle />
            )}
          />
        }
        renderItem={renderItem}
        queryKey={Queries.BookByCategory}
        fetchPage={page =>
          bookService.getBookListByCategory({
            uid,
            page,
            category,
          })
        }
        flatListProps={{
          testID: 'flatlist-book-itens',
          style: $flatListStyle,
          numColumns: 2,
          showsVerticalScrollIndicator: false,
          columnWrapperStyle: $columnWrapperStyle,
          contentContainerStyle: $contentContainerStyle,
        }}
      />
    </SharedWrapperScreen>
  );
}

const $flatListStyle: ViewStyle = {
  width: '100%',
};

const $contentContainerStyle: ViewStyle = {
  gap: 20,
  flexGrow: 1,
  width: '100%',
  paddingBottom: 50,
};

const $columnWrapperStyle: ViewStyle = {
  justifyContent: 'space-between',
};
