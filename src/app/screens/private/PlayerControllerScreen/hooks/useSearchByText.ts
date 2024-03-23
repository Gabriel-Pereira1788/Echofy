import {useState} from 'react';

import {Track} from '@infra';

export function useSearchByText(trackChapters: Track[]) {
  const [chapters, setRenderChapters] = useState(trackChapters);

  function onSearchChapter(text: string) {
    if (text.trim() === '') {
      setRenderChapters(trackChapters);
      return;
    }
    const filteredChapters = trackChapters.filter(chapter =>
      chapter.title.includes(text),
    );
    setRenderChapters(filteredChapters);
  }

  return {
    chapters,
    onSearchChapter,
  };
}
