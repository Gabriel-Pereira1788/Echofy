import React from 'react';

import {usePlayerStore} from '@store';

import {Box, BoxProps} from '../Box/Box';

import {PlayerAttribution} from './PlayerAttribution';
import {PlayerButton} from './PlayerButton';
import {PlayerImage} from './PlayerImage';
import {PlayerProgress} from './PlayerProgress';

type Props = {};

export function Player({}: Props) {
  const player = usePlayerStore();

  if (!player) {
    return null;
  }
  return (
    <Box width={'100%'}>
      <PlayerProgress />
      <Box {...$boxWrapperStyle}>
        <PlayerImage uri={player.coverURI} />

        <PlayerAttribution title={player.title} author={player.author} />

        <PlayerButton />
      </Box>
    </Box>
  );
}

const $boxWrapperStyle: BoxProps = {
  width: '100%',
  flexDirection: 'row',
  gap: 'sp10',
  backgroundColor: 'bgMain',
  alignItems: 'flex-start',
  padding: 'sp10',
  justifyContent: 'space-between',
};
