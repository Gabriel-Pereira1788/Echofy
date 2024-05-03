import React from 'react';
import {Image} from 'react-native';

import {Author} from '@domain';

import {Box} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

import {ReviewVoteRating} from './ReviewVoteRating';

type Props = {
  author: Author;
  voteRating: number;
};

export function ReviewAuthorInfo({author, voteRating}: Props) {
  const source = {uri: author.profile_image};

  return (
    <Box width={'100%'} flexDirection="row" gap="sp15">
      <Box overflow="hidden" width={48} height={48} borderRadius="rd8">
        {false ? (
          <Image
            resizeMode="cover"
            style={{width: '100%', height: '100%'}}
            source={source}
          />
        ) : (
          <Icon color="accent60" iconName="avatar" size="sp48" />
        )}
      </Box>

      <Box gap="sp3">
        <Text
          text={author.name}
          preset="medium/14"
          setColorsTheme={{
            dark: 'neutral5',
            light: 'neutral80',
          }}
        />

        <ReviewVoteRating rating={voteRating} />
      </Box>
    </Box>
  );
}
