import React from 'react';

import {Text} from '../Text/Text';

type Props = {bookTitle: string};

export function BookTitle({bookTitle}: Props) {
  return (
    <Text
      text={bookTitle}
      setColorsTheme={{dark: 'neutral5', light: 'neutral80'}}
    />
  );
}
