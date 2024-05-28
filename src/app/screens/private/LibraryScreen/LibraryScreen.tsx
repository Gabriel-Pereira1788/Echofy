import React, {useCallback} from 'react';
import {ListRenderItemInfo, ViewStyle} from 'react-native';

import {FavoriteBook, Queries, favoritesService} from '@domain';
import {useAuthContext} from '@providers';
import {CommonStackProps} from '@router';
import {SharedBrandHeader, SharedWrapperScreen} from '@shared';
import {InfinityScrollList} from '@super-components';

import {Box, SearchBar} from '@components';

import {LibraryBookItem} from './components/LibraryBookItem';
import {useSearchByText} from './hooks/useSearchByText';

export function LibraryScreen({}: CommonStackProps<'MainScreen'>) {
  const {uid} = useAuthContext();
  const {searchText, onChangeText} = useSearchByText();

  const renderItem = useCallback(({item}: ListRenderItemInfo<FavoriteBook>) => {
    return <LibraryBookItem book={item.book} />;
  }, []);

  return (
    <SharedWrapperScreen customPadding customMargin>
      <SharedBrandHeader />
      <Box paddingHorizontal="sp25" width={'100%'} mt="sp20">
        <SearchBar
          placeholder="Search Books..."
          title="My Books"
          onChangeText={onChangeText}
        />
      </Box>
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
    </SharedWrapperScreen>
  );
}

const $contentContainerStyle: ViewStyle = {
  paddingHorizontal: 25,
  paddingBottom: 80,
  flexGrow: 1,
  marginTop: 20,
};
