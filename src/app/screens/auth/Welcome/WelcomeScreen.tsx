import React from 'react';

import {AuthStackProps} from '@router';
import {SharedPublicLayout} from '@shared';

import {Box, Button, Text} from '@components';

export function WelcomeScreen({navigation}: AuthStackProps<'WelcomeScreen'>) {
  function redirectToPersonalizationScreen() {
    navigation.navigate('PersonalizationScreen');
  }

  function onSkip() {
    navigation.navigate('ReadyToGoScreen', {selectedCategories: []});
  }
  return (
    <SharedPublicLayout>
      <Box gap="sp28" padding="sp15">
        <Text text="Welcome!" color="accent50" preset="semiBold/16" />
        <Text
          text="Find what you are looking for"
          color="primary50"
          weight="light"
          size="big55"
        />

        <Text
          text="By personalize your account, we can help you to find what you like."
          color="black"
          preset="regular/14"
        />
        <Box gap="sp10">
          <Button
            text="Personalize Your Account"
            onPress={redirectToPersonalizationScreen}
          />
          <Button text="Skip" type="outline" onPress={onSkip} />
        </Box>
      </Box>
    </SharedPublicLayout>
  );
}
