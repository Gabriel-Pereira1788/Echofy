import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

export function useScrollEndReached(onEndReached: () => void) {
  function onScroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const {layoutMeasurement, contentSize, contentOffset} = event.nativeEvent;
    const paddingBottom = 20;
    const isEndReached =
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingBottom;

    if (isEndReached) {
      onEndReached();
    }
  }

  return {
    onScroll,
  };
}
