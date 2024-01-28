import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ActivityIndicator} from 'react-native';

import {BookCategory, useBookCategories} from '@domain';
import {AuthStackProps} from '@router';
import {SharedPublicLayout} from '@shared';
import {theme} from '@styles';

import {Box, Button} from '@components';
import {useResetAuthStack} from '@hooks';

import {
  PersonalizationScreenHeader,
  PersonalizationScreenRenderCategories,
  PersonalizationScreenSearch,
} from './components';

export function PersonalizationScreen({}: AuthStackProps<'PersonalizationScreen'>) {
  const {categories, isLoading} = useBookCategories();
  const {reset} = useResetAuthStack();
  const allCategories = useRef<BookCategory[]>([]);
  const [categoriesToRender, setCategoriesToRender] = useState<BookCategory[]>(
    [],
  );
  const selectedCategories = categoriesToRender.filter(
    _category => _category.isSelected,
  );

  const changeCategoriesToRender = useCallback(
    (newCategoriesToRender: BookCategory[]) => {
      setCategoriesToRender(newCategoriesToRender);
    },
    [],
  );

  const changeSelectedCategories = useCallback(
    (newSelectedCategories: BookCategory[]) => {
      setCategoriesToRender(newSelectedCategories);
      allCategories.current = newSelectedCategories;
    },
    [],
  );

  function onSubmitSelectedCategories() {
    reset({selectedCategories});
  }

  function onSkip() {
    reset({selectedCategories});
  }

  useEffect(() => {
    if (categories && categories.length > 0) {
      setCategoriesToRender(categories);
      allCategories.current = categories;
    }
  }, [categories]);
  return (
    <SharedPublicLayout>
      <Box gap="sp28" padding="sp15">
        <PersonalizationScreenHeader />
        <PersonalizationScreenSearch
          disabled={isLoading}
          allCategories={allCategories.current}
          changeCategoriesToRender={changeCategoriesToRender}
        />
        <Box flexDirection="row" alignSelf="center">
          {isLoading && !categories ? (
            <ActivityIndicator size={20} color={theme.colors.primary80} />
          ) : (
            <PersonalizationScreenRenderCategories
              allCategories={allCategories.current}
              categoriesToRender={categoriesToRender!}
              changeSelectedCategories={changeSelectedCategories}
            />
          )}
        </Box>

        <Box gap="sp7">
          <Button
            text="Submit"
            disabled={selectedCategories.length < 3}
            onPress={onSubmitSelectedCategories}
          />
          <Button text="Skip" type="outline" onPress={onSkip} />
        </Box>
      </Box>
    </SharedPublicLayout>
  );
}
