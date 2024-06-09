import React from 'react';

import {database} from '@database';
import {useAuthContext} from '@providers';
import {useSettingsService, useThemePreference} from '@services';
import {SharedWrapperScreen} from '@shared';

import {Box, Button, RadioButtonSelector, Separator, Text} from '@components';

import {clearStorage} from './clearStorage';
import {ProfileSection} from './components/ProfileSection';
import {Option, themeOptions} from './constants/themeOptions';

export function SettingsScreen() {
  const themePreference = useThemePreference();
  const {setThemePreference} = useSettingsService();
  const {credentials, removeCredentials} = useAuthContext();

  const selectedItem = themeOptions.find(
    item => item.themePreference === themePreference,
  );

  async function signOut() {
    removeCredentials();
    await database.reset();
    clearStorage();
  }

  function onSelect(item: Option) {
    setThemePreference(item.themePreference);
  }
  return (
    <SharedWrapperScreen headerTitle="Settings" goBack customPadding>
      <Box
        flex={1}
        alignItems="center"
        justifyContent="flex-start"
        width={'100%'}>
        {credentials && (
          <ProfileSection
            profileImageUri={credentials.profileImage}
            profileName={credentials.name}
          />
        )}
        <Box width={'100%'} marginTop="sp20">
          <Box marginVertical="sp20" marginLeft="sp20">
            <Text text="Dark Mode" preset="semiBold/24" color="neutral40" />
          </Box>
          <Separator />
          <RadioButtonSelector
            selectedItem={selectedItem}
            items={themeOptions}
            descriptionKey="description"
            labelKey="label"
            onSelect={onSelect}
            valueKey="themePreference"
          />
        </Box>
        <Box width={'100%'} padding="sp20" mt="sp20">
          <Button
            text="Log out"
            type="outline"
            customColor="accent50"
            onPress={signOut}
          />
        </Box>
      </Box>
    </SharedWrapperScreen>
  );
}
