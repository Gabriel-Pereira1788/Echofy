import React from 'react';

import {CommonStackProps} from '@router';
import {SharedBrandHeader, SharedWrapperScreen} from '@shared';
import {LifeCycleHandler} from 'react-modular-state';

import {Box} from '@components';

import {
  HomeScreenSeeMore,
  HomeScreenCarousel,
  HomeScreenCategories,
} from './components';
import {homeScreenStore} from './store';

export function HomeScreen({}: CommonStackProps<'MainScreen'>) {
  return (
    <LifeCycleHandler store={homeScreenStore}>
      <SharedWrapperScreen customPadding scrollEnabled>
        <HomeScreenCarousel />
        <SharedBrandHeader disabledMarginTop />
        <Box marginVertical="sp20">
          <HomeScreenCategories />
        </Box>
        <HomeScreenSeeMore />
      </SharedWrapperScreen>
    </LifeCycleHandler>
  );
}
