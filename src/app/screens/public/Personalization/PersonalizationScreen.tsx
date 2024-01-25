import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ActivityIndicator} from 'react-native';

import {BookCategory, useBookCategories} from '@domain';
import {AuthStackProps} from '@router';
import {SharedPublicLayout} from '@shared';
import {theme} from '@styles';

import {Box, Button, Text} from '@components';

import {
  PersonalizationScreenRenderCategories,
  PersonalizationScreenSearch,
} from './components';

export function PersonalizationScreen({}: AuthStackProps<'PersonalizationScreen'>) {
  const {categories, isLoading} = useBookCategories();

  const allCategories = useRef<BookCategory[]>([]);
  const [categoriesToRender, setCategoriesToRender] = useState<BookCategory[]>(
    [],
  );

  const changeCategoriesToRender = useCallback(
    (newCategoriesToRender: BookCategory[]) => {
      setCategoriesToRender(newCategoriesToRender);
    },
    [],
  );

  useEffect(() => {
    if (categories && categories.length > 0) {
      setCategoriesToRender(categories);
      allCategories.current = categories;
    }
  }, [categories]);
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
        <PersonalizationScreenSearch
          disabled={isLoading}
          allCategories={allCategories.current}
          categoriesToRender={categoriesToRender}
          changeCategoriesToRender={changeCategoriesToRender}
        />
        <Box flexDirection="row" alignSelf="center">
          {isLoading && !categories ? (
            <ActivityIndicator size={20} color={theme.colors.primary80} />
          ) : (
            <PersonalizationScreenRenderCategories
              categories={categoriesToRender!}
              changeCategoriesToRender={changeCategoriesToRender}
            />
          )}
        </Box>

        <Box gap="sp7">
          <Button text="Submit" />
          <Button text="Skip" type="outline" />
        </Box>
      </Box>
    </SharedPublicLayout>
  );
}
