import React, {useCallback} from 'react';
import {ListRenderItemInfo, ViewStyle} from 'react-native';

import {Book as BookType, Queries, bookService} from '@domain';
import {useAuthContext} from '@providers';
import {CommonStackProps} from '@router';
import {SharedWrapperScreen} from '@shared';
import {InfinityScrollList, SkeletonsList} from '@super-components';

import {BookSkeleton} from '@components';

import {CategoryBookItem} from './components';
import {buildBookCategory} from './functions';

export function CategoryBookScreen({
  route,
}: CommonStackProps<'CategoryBookScreen'>) {
  const {uid} = useAuthContext();

  const {identify, title} = buildBookCategory(route.params);

  const renderItem = useCallback(({item}: ListRenderItemInfo<BookType>) => {
    return <CategoryBookItem book={item} />;
  }, []);

  return (
    <SharedWrapperScreen
      headerTitle={title}
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
            category: identify,
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
