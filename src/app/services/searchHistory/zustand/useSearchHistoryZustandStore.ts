import {Book} from '@domain';
import {StorageKeys, storage} from '@infra';
import {create} from 'zustand';
import {persist} from 'zustand/middleware';

interface SearchHistoryStore {
  searchHistory: Book[];
  addToSearchHistory: (book: Book) => void;
}

export const useSearchHistoryZustandStore = create<SearchHistoryStore>()(
  persist(
    set => ({
      searchHistory: [],
      addToSearchHistory: book => {
        set(prev => ({searchHistory: [...prev.searchHistory, book]}));
      },
    }),
    {
      name: StorageKeys.SearchHistory,
      storage: storage,
    },
  ),
);
