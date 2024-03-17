import {useRef} from 'react';

import {
  GestureEvent,
  HandlerStateChangeEvent,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';

import {makeSwipedPosition} from '../functions';

type Props = {
  remainingProgressValue: number;
  onSwipe: (position: number) => void;
  onFinishSwipe: (position: number) => Promise<void>;
};

export function useSwipePosition({
  onSwipe,
  onFinishSwipe,
  remainingProgressValue,
}: Props) {
  const currentProgressValue = useRef(0);

  async function onGestureEvent(
    event: GestureEvent<PanGestureHandlerEventPayload>,
  ) {
    const translationX = event.nativeEvent.translationX;
    if (translationX < 0) {
      const positiveNumber = translationX * -1;
      const translationValue = currentProgressValue.current - positiveNumber;

      onSwipe(translationValue);
    } else {
      onSwipe(translationX + currentProgressValue.current);
    }
  }

  function onEnded(duration: number, currentPosition: number) {
    return async (event: HandlerStateChangeEvent<Record<string, unknown>>) => {
      const translationX = event.nativeEvent.translationX as number;
      const isPositiveValue = translationX > 0;

      console.log('remaining progress value', remainingProgressValue);
      if (isPositiveValue) {
        currentProgressValue.current =
          currentProgressValue.current + translationX;
        const swipedPosition = makeSwipedPosition({
          partialValue: translationX,
          totalValue: remainingProgressValue,
          duration: duration,
        });

        await onFinishSwipe(currentPosition + swipedPosition);
      } else {
        const newPositiveNumber = translationX * -1;
        currentProgressValue.current =
          currentProgressValue.current - newPositiveNumber;

        const swipedPosition = makeSwipedPosition({
          partialValue: newPositiveNumber,
          totalValue: remainingProgressValue,
          duration: duration,
        });

        await onFinishSwipe(currentPosition - swipedPosition);
      }
    };
  }

  return {
    onGestureEvent,
    onEnded,
  };
}
