import {useCallback} from 'react';

import {useOpacityAnimated, useSlideAnimated} from '@animations';

export function useRenderItemAnimated(initialTranslate: number) {
  const {opacity, show} = useOpacityAnimated(0.5);
  const {translationY, slideUp} = useSlideAnimated({
    initialValue: initialTranslate,
    slideUpValue: 0,
    slideDownValue: 0,
  });

  const renderItem = useCallback(() => {
    slideUp(() => {
      show();
    });
  }, [show, slideUp]);

  return {
    opacity,
    translationY,
    renderItem,
  };
}
