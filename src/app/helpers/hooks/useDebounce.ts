import {useRef} from 'react';

export function useDebounce(delay?: number) {
  const idTimeout = useRef<NodeJS.Timeout>();

  function debouncedSearch(onSearch: (text: string) => void) {
    return function (text: string) {
      if (idTimeout.current) {
        clearTimeout(idTimeout.current);
      }
      idTimeout.current = setTimeout(() => {
        onSearch(text);
      }, delay || 500);
    };
  }

  return debouncedSearch;
}
