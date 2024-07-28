import React, {useCallback} from 'react';
import {ListRenderItemInfo, ViewStyle} from 'react-native';

import {FavoriteBook, favoritesService, Queries} from '@domain';
import {useAuthContext} from '@providers';
import {InfinityScrollList} from '@super-components';

import {LibraryBookItem} from './LibraryBookItem';

type Props = {
  searchText: React.MutableRefObject<string>;
};
export function LibraryBookList({searchText}: Props) {
  const {uid} = useAuthContext();
  const renderItem = useCallback(({item}: ListRenderItemInfo<FavoriteBook>) => {
    return <LibraryBookItem book={item.book} />;
  }, []);
  return (
    <InfinityScrollList
      fetchPage={page =>
        favoritesService.getFavorites({
          page,
          uid: uid!,
          searchText: searchText.current,
        })
      }
      queryKey={Queries.Favorites}
      renderItem={renderItem}
      flatListProps={{
        contentContainerStyle: $contentContainerStyle,
      }}
      emptyStateProps={{
        title: 'No Favorite Books Yet.',
        message:
          "It looks like you don't have any favorite books yet. Start exploring and add some titles to your favorites to see them here. Happy reading!",
      }}
    />
  );
}

const $contentContainerStyle: ViewStyle = {
  paddingHorizontal: 25,
  paddingBottom: 80,
  flexGrow: 1,
  marginTop: 20,
};
