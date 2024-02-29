import React from 'react';

import {Book as BookType} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Book} from '@components';

type Props = {
  item: BookType;
  onPress?: () => void;
};

export function SearchScreenBookItem({item, onPress}: Props) {
  const navigation = useNavigation();

  function redirectToBookScreen() {
    onPress?.();
    navigation.navigate('DetailsBookScreen', {
      id: item.id,
    });
  }

  return <Book book={item} renderTitle onPress={redirectToBookScreen} />;
}
