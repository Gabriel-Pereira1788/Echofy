import React from 'react';
import {ScrollView} from 'react-native';

import {SharedWrapperScreen} from '@shared';

import {Box, Icon} from '@components';

import {HomeScreenBookSection} from './components/HomeScreenBookSection';
import {HomeScreenCategories} from './components/HomeScreenCategories';

export function HomeScreen() {
  return (
    <SharedWrapperScreen
      showLogo
      customPadding
      headerRight={
        <Icon iconName="settings" size="sp23" color="baseIconColor" />
      }>
      <ScrollView style={{flex: 1}} nestedScrollEnabled>
        <HomeScreenCategories />
        <Box flex={1} padding="sp25">
          <HomeScreenBookSection
            sectionBooks={[1, 2, 3, 4, 5]}
            sectionTitle="Recommended For You"
          />
          {/* <Text text="HomeScreen" />
        <Button text="sign out" onPress={removeCredentials} /> */}
        </Box>
      </ScrollView>
    </SharedWrapperScreen>
  );
}
