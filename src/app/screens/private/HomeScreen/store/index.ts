import {BookSection} from '@domain';
import {create} from 'react-modular-state';

type State = {
  currentSection: BookSection;
};
export const [homeScreenStore, useHomeScreenState] = create<State>({
  currentSection: {
    identify: 'recommended-for-you',
    title: 'Recommended For You',
  },
});
