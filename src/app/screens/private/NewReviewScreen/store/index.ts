import {create} from 'react-modular-state';

export const [newReviewScreenStore, useNewReviewScreenState] = create({
  rating: 0,
  content: '',
});
