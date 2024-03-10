export type KeySpeedState = 'normal' | 'faster' | 'slowly';
export const mappedSpeedState: Record<KeySpeedState, number> = {
  normal: 1,
  faster: 2,
  slowly: 0.5,
};

export const mappedNextSpeedState: Record<
  KeySpeedState,
  {nextState: KeySpeedState; nextValue: number}
> = {
  normal: {nextState: 'faster', nextValue: 2},
  faster: {nextState: 'slowly', nextValue: 0.5},
  slowly: {nextState: 'normal', nextValue: 1},
};
