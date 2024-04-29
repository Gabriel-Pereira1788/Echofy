import React from 'react';

import {Review} from '@domain';
import {dimensions} from '@utils';

import {Box, Text, BoxGradient} from '@components';
import {useAppSafeArea} from '@hooks';

import {makeVoteAverage} from '../functions/makeVoteAverage';

type Props = {bookImage: string; bookTitle: string; reviews?: Review[]};

export function HeaderPanel({reviews}: Props) {
  const {top} = useAppSafeArea();

  const voteAverage = makeVoteAverage(reviews);

  return (
    <BoxGradient
      marginBottom="sp10"
      borderBottomEndRadius="rd40"
      height={dimensions.height / 3.5}
      startAxis={{x: 5, y: 2}}
      endAxis={{x: 9, y: 1}}
      colors={['primary50', 'primary60', 'primary20']}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        width={'100%'}
        style={{marginTop: top}}
        gap="sp20"
        padding="sp20">
        <Box>
          <Text text={voteAverage} preset="bold/40" color="white" />
        </Box>

        <Box gap="sp15" alignItems="flex-end">
          <Box flexDirection="row" width={'90%'} alignItems="center" gap="sp3">
            <Text text="5" color="white" />
            <Box backgroundColor="primary20" width={'85%'}>
              <Box
                backgroundColor="white"
                width={'80%'}
                height={2}
                borderRadius="rd4"
              />
            </Box>
          </Box>
          <Box flexDirection="row" width={'90%'} alignItems="center" gap="sp3">
            <Text text="4" color="white" />
            <Box backgroundColor="primary20" width={'85%'}>
              <Box
                backgroundColor="white"
                width={'80%'}
                height={2}
                borderRadius="rd4"
              />
            </Box>
          </Box>
          <Box flexDirection="row" width={'90%'} alignItems="center" gap="sp3">
            <Text text="3" color="white" />
            <Box backgroundColor="primary20" width={'85%'}>
              <Box
                backgroundColor="white"
                width={'80%'}
                height={2}
                borderRadius="rd4"
              />
            </Box>
          </Box>
          <Box flexDirection="row" width={'90%'} alignItems="center" gap="sp3">
            <Text text="2" color="white" />
            <Box backgroundColor="primary20" width={'85%'}>
              <Box
                backgroundColor="white"
                width={'80%'}
                height={2}
                borderRadius="rd4"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </BoxGradient>
  );
}
