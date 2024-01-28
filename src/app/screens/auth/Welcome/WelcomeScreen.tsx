import React from 'react';

import {AuthStackProps} from '@router';
import {SharedPublicLayout} from '@shared';

import {Box, Button, Text} from '@components';
import {useResetAuthStack} from '@hooks';

export function WelcomeScreen({navigation}: AuthStackProps<'WelcomeScreen'>) {
  const {reset} = useResetAuthStack();

  function redirectToPersonalizationScreen() {
    navigation.navigate('PersonalizationScreen');
  }

  function onSkip() {
    reset({selectedCategories: []});
  }
  return (
    <SharedPublicLayout>
      <Box gap="sp28" padding="sp15">
        <Text
          text="Welcome!"
          preset="semiBold/16"
          setColorsTheme={{
            light: 'accent50',
            dark: 'primary20',
          }}
        />
        <Text
          text="Find what you are looking for"
          color="activeColor"
          weight="light"
          size="big55"
        />

        <Text
          setColorsTheme={{
            dark: 'primary20',
            light: 'neutral80',
          }}
          text="By personalize your account, we can help you to find what you like."
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
