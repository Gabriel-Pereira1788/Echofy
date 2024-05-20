import React, {useMemo, useState} from 'react';

import {BookSection} from '@domain';
import {CommonStackProps} from '@router';
import {SharedBrandHeader, SharedWrapperScreen} from '@shared';

import {Box, Text, TouchableOpacityBox} from '@components';

import {HomeScreenCarousel} from './components/HomeScreenCarousel';
import {HomeScreenCategories} from './components/HomeScreenCategories';
import {buildBookSections} from './functions/buildBookSections';

export function HomeScreen({navigation}: CommonStackProps<'MainScreen'>) {
  const bookSections = useMemo(() => buildBookSections(), []);
  const [currentSection, setCurrentSection] = useState<BookSection>(
    bookSections[0],
  );

  function redirectToCategoryBookScreen() {
    navigation.navigate('CategoryBookScreen', {
      categoryIdentify: currentSection.identify,
      categoryTitle: currentSection.title,
    });
  }
  return (
    <SharedWrapperScreen customPadding scrollEnabled>
      <HomeScreenCarousel identify={currentSection.identify} />
      <SharedBrandHeader disabledMarginTop />
      <Box marginVertical="sp20">
        <HomeScreenCategories
          currentSection={currentSection}
          bookSections={bookSections}
          onSelect={setCurrentSection}
        />
      </Box>
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
    </SharedWrapperScreen>
  );
}
