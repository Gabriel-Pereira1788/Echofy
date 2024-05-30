import {ImageProps} from 'react-native';

import {images} from '@assets';

export interface OnboardingPage {
  image: {
    light: ImageProps['source'];
    dark: ImageProps['source'];
  };
  title: string;
  message: string;
}
export const onboardingPages: OnboardingPage[] = [
  {
    image: {
      light: images.onboardingLight1,
      dark: images.onboardingDark1,
    },
    title: 'Welcome to Echofy!',
    message:
      'Discover a new way to enjoy your favorite books. With our app, you can listen to incredible stories anytime, anywhere.',
  },
  {
    image: {
      light: images.onboardingLight2,
      dark: images.onboardingDark2,
    },
    title: 'Take Your Stories with You',
    message:
      'Download audiobooks for offline listening and enjoy your reads even without internet. Perfect for traveling, exercising, and more.',
  },
  {
    image: {
      light: images.onboardingLight3,
      dark: images.onboardingDark3,
    },
    title: 'Freedom to Listen',
    message:
      'It has never been easier to engage with literature. Our app offers instant access to thousands of audiobooks, allowing you to enjoy great stories effortlessly.',
  },
];
