import {useRef} from 'react';

import {Queries} from '@domain';
import {useQueryClient} from '@tanstack/react-query';

import {useDebounce} from '@hooks';

export function useSearchByText() {
  const searchText = useRef('');
  const queryClient = useQueryClient();
  const debouncedSearch = useDebounce();

  function onChangeText(text: string) {
    if (text.trim() !== '') {
      searchText.current = text;
      queryClient.invalidateQueries({
        queryKey: [Queries.Favorites],
      });
    }
  }

  return {
    searchText,
    onChangeText: debouncedSearch(onChangeText),
  };
}
