import React, {useState} from 'react';

import {Box, Button, Input, Text} from '@components';

import {useOnSend} from '../hooks';
import {useNewReviewScreenState} from '../store';

type Props = {
  onSend: ReturnType<typeof useOnSend>;
};

export function NewReviewContent({onSend}: Props) {
  const [rating] = useNewReviewScreenState('rating');
  const [content, setContent] = useState('');

  const isDisabled = rating < 0 || content.trim() === '';
  function handleOnSend() {
    if (content.trim() !== '') {
      onSend(content, rating);
    }
  }

  function handleChangeText(text: string) {
    setContent(text);
  }

  return (
    <Box width={'100%'} gap="sp20">
      <Text text="Tell us more" preset="medium/20" />
      <Input
        value={content}
        multiline
        placeholder="Why this rating?"
        onChangeText={handleChangeText}
        style={{
          minHeight: 100,
          maxHeight: 150,
        }}
      />
      <Button text="Submit" onPress={handleOnSend} disabled={isDisabled} />
    </Box>
  );
}
