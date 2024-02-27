import React from 'react';

import {Text} from '../Text/Text';

type Props = {bookAuthor: string};

export function BookAuthor({bookAuthor}: Props) {
  return (
    <Text
      text={bookAuthor}
      preset="medium/14"
      setColorsTheme={{dark: 'neutral10', light: 'primary50'}}
    />
  );
}
