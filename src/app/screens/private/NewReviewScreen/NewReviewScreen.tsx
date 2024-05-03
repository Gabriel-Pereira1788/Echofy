import React, {useState} from 'react';
import {Alert} from 'react-native';

import {useSendReview} from '@domain';
import {useAuthContext} from '@providers';
import {CommonStackProps} from '@router';
import {SharedWrapperScreen} from '@shared';
import {dimensions} from '@utils';

import {Box, Button, Image, Input, ReviewVoteRating, Text} from '@components';

export function NewReviewScreen({route}: CommonStackProps<'NewReviewScreen'>) {
  const {bookId} = route.params;
  const {send} = useSendReview(bookId, {
    onSuccess: () => {
      Alert.alert('Review criado', 'review enviado');
    },
  });
  const {credentials} = useAuthContext();

  const [rating, setRating] = useState(0);
  const [content, setContent] = useState<string>('');

  const isDisabled = rating < 0 || content.trim() === '';

  function onSend() {
    if (content && rating > 0 && credentials) {
      send({
        content,
        vote_rating: rating,
        author: {
          name: credentials.name,
        },
      });
    }
  }
  return (
    <SharedWrapperScreen goBack headerTitle={'New Review'}>
      <Box
        flex={1}
        width={'100%'}
        justifyContent="flex-start"
        alignItems="center"
        gap="sp25">
        <Box width={'100%'} gap="sp15" alignItems="flex-start">
          <Text text="Tap to rate" />
          <ReviewVoteRating rating={rating} size="sp25" onSelect={setRating} />
        </Box>
        <Box width={'100%'} gap="sp20">
          <Text text="Tell us more" preset="medium/20" />
          <Input
            multiline
            placeholder="Why this rating?"
            onChangeText={setContent}
            style={{
              minHeight: 100,
              maxHeight: 150,
            }}
          />
          <Button text="Submit" onPress={onSend} disabled={isDisabled} />
        </Box>
        <Image
          imageName="reviewsIllustration"
          width={(dimensions.width / 100) * 70}
          height={300}
        />
      </Box>
    </SharedWrapperScreen>
  );
}
