import React from 'react';

import {SharedWrapperScreen} from '@shared';

import {Icon, TouchableOpacityBox} from '@components';

import {SearchExploreInput} from './components/SearchExploreInput';
import {SearchRecommendedCategories} from './components/SearchRecommendedCategories';

export function SearchScreen() {
  return (
    <SharedWrapperScreen
      scrollEnabled
      showLogo
      headerRight={
        <TouchableOpacityBox>
          <Icon iconName="settings" size="sp23" color="baseIconColor" />
        </TouchableOpacityBox>
      }>
      <SearchExploreInput />
      <SearchRecommendedCategories />
    </SharedWrapperScreen>
  );
}
