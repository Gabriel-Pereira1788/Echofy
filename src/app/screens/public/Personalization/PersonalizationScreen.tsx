import React, {useCallback, useState} from 'react';
import {FlatList, ListRenderItem} from 'react-native';

import {AuthStackProps} from '@router';
import {SharedPublicLayout} from '@shared';

import {Box, Button, Input, Text} from '@components';

import {mockedCategories} from './mock/mockCategories';

export function PersonalizationScreen({}: AuthStackProps<'PersonalizationScreen'>) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  function handleSelectCategory(category: string) {
    setSelectedCategories(prev => [...prev, category]);
  }
  const renderItem: ListRenderItem<string> = useCallback(
    ({item}) => {
      const isSelected = selectedCategories.find(category => category === item);
      return (
        <Box alignItems="center" justifyContent="center" marginHorizontal="sp3">
          <Button
            text={item}
            type={isSelected ? 'selected' : 'category'}
            onPress={() => handleSelectCategory(item)}
          />
        </Box>
      );
    },
    [selectedCategories],
  );
  return (
    <SharedPublicLayout>
      <Box gap="sp28" padding="sp15">
        <Box gap="sp10">
          <Text
            text="Personalize Suggestion"
            color="neutral80"
            preset="semiBold/16"
          />
          <Text
            text="Choose min 3 topic you like, we will give you more often that relate to it."
            color="neutral80"
            preset="regular/14"
          />
        </Box>
        <Input placeholder="Search Categories" />

        <Box flexDirection="row">
          <FlatList
            data={mockedCategories}
            numColumns={3}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderItem}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <Box height={10} />}
          />
        </Box>

        <Box gap="sp7">
          <Button text="Submit" />
          <Button text="Skip" type="outline" />
        </Box>
      </Box>
    </SharedPublicLayout>
  );
}
