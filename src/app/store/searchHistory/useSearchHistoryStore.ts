import {useSearchHistoryZustandStore} from './zustand/useSearchHistoryZustandStore';

export function useSearchHistoryStore() {
  const searchHistory = useSearchHistoryZustandStore(
    state => state.searchHistory,
  );
  return searchHistory;
}

export function useSearchHistoryActions() {
  const addToSearchHistory = useSearchHistoryZustandStore(
    state => state.addToSearchHistory,
  );

  return {
    addToSearchHistory,
  };
}
