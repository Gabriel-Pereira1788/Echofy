import React, {useRef, useState} from 'react';
import {Image, ListRenderItemInfo} from 'react-native';

import {useSettingsService} from '@services';
import {SharedWrapperScreen} from '@shared';

import {Box, Button, Carousel, CarouselRef, Text} from '@components';
import {useTheme} from '@hooks';

import {OnboardingPage, onboardingPages} from './onBoardingPage';

type Props = {};

export function OnboardingScreen({}: Props) {
  const carouselRef = useRef<CarouselRef>(null);
  const {colorScheme} = useTheme();
  const {finishOnboarding} = useSettingsService();

  const [isLastPage, setIsLastPage] = useState(false);

  function onPressNextPage() {
    const currentPosition = carouselRef.current?.currentPosition;

    if (
      typeof currentPosition === 'number' &&
      currentPosition < onboardingPages.length - 1
    ) {
      carouselRef.current?.onSelect(currentPosition + 1);
    }
  }

  function onPressSkip() {
    finishOnboarding();
  }

  function renderItem({item}: ListRenderItemInfo<OnboardingPage>) {
    return (
      <Box alignItems="center" width={'100%'} testID="onboarding-page-item">
        <Image
          source={colorScheme === 'dark' ? item.image.dark : item.image.light}
          resizeMode="cover"
        />
        <Box gap="sp10" marginVertical="sp25" alignItems="center">
          <Text text={item.title} preset="semiBold/16" />
          <Text text={item.message} preset="regular/14" />
        </Box>
      </Box>
    );
  }
  return (
    <SharedWrapperScreen>
      <Carousel
        ref={carouselRef}
        content={onboardingPages}
        renderItem={renderItem}
        onChangeCurrentPosition={position => {
          if (position === onboardingPages.length - 1) {
            setIsLastPage(true);
          } else {
            setIsLastPage(false);
          }
        }}
      />
      <Box flexDirection="row" alignItems="center">
        {isLastPage ? (
          <Box flex={1}>
            <Button text="Let`s Get Started!" onPress={finishOnboarding} />
          </Box>
        ) : (
          <>
            <Box flex={1}>
              <Button
                text="Skip"
                type="flat"
                onPress={onPressSkip}
                customColor="buttonText"
              />
            </Box>
            <Box flex={1}>
              <Button text="Next" onPress={onPressNextPage} />
            </Box>
          </>
        )}
      </Box>
    </SharedWrapperScreen>
  );
}
