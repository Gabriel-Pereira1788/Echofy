import React from 'react';

import {CommonStackProps} from '@router';
import {SharedBrandHeader, SharedWrapperScreen} from '@shared';

import {Box, SearchBar} from '@components';

import {LibraryBookList} from './components/LibraryBookList';
import {useSearchByText} from './hooks/useSearchByText';

export function LibraryScreen({}: CommonStackProps<'MainScreen'>) {
  const {searchText, onChangeText} = useSearchByText();

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
      <LibraryBookList searchText={searchText} />
    </SharedWrapperScreen>
  );
}
