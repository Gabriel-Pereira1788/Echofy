import React from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';

import {useBookReading} from '@domain';
import {AppStackProps} from '@router';
import {SharedWrapperScreen} from '@shared';

import {Box, IconPress, Text} from '@components';

export function ReadBookScreen({
  navigation,
  route,
}: AppStackProps<'ReadBookScreen'>) {
  const {bookId, bookTitle} = route.params;

  const {readingText, isLoading} = useBookReading(bookId);
  const transformedText = readingText ? readingText.slice(0, 10000) : '';

  function goBack() {
    navigation.goBack();
  }

  const _bookTitle =
    bookTitle.length > 30 ? bookTitle.slice(0, 30) + '...' : bookTitle;

  return (
    <SharedWrapperScreen
      headerTitle={_bookTitle}
      headerLeft={
        <IconPress
          testID="go-back-player-controller"
          iconName="arrowDown"
          size="sp20"
          color="baseIconColor"
          onPress={goBack}
        />
      }>
      {isLoading ? (
        <Box flex={1} alignItems="center" justifyContent="center">
          <ActivityIndicator size={20} />
        </Box>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text text={transformedText} preset="medium/10" color="text" />
        </ScrollView>
      )}
    </SharedWrapperScreen>
  );
}
