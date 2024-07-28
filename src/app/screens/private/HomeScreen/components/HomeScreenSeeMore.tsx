import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, Text, TouchableOpacityBox} from '@components';

import {useHomeScreenState} from '../store';

export function HomeScreenSeeMore() {
  const [currentSection] = useHomeScreenState('currentSection');
  const navigation = useNavigation();

  function redirectToCategoryBookScreen() {
    navigation.navigate('CategoryBookScreen', {
      categoryIdentify: currentSection.identify,
      categoryTitle: currentSection.title,
    });
  }
  return (
    <Box
      width={'100%'}
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
      paddingHorizontal="sp25"
      marginBottom="sp25">
      <Text text={currentSection.title} preset="medium/20" />

      <TouchableOpacityBox onPress={redirectToCategoryBookScreen}>
        <Text text="See more" color="textActive" preset="medium/14" />
      </TouchableOpacityBox>
    </Box>
  );
}
