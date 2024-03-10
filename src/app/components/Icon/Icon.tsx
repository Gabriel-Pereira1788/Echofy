import React from 'react';

import {
  Activity,
  ArrowDown,
  ArrowLeft,
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  BookMarkIcon,
  CloseSquare,
  DocumentIcon,
  DownloadIcon,
  HomeIcon,
  PaperIcon,
  PauseIcon,
  PlayIcon,
  SearchIcon,
  Settings,
  TickSquare,
  TimeSquareIcon,
  VolumeDownIcon,
  VolumeUpIcon,
  volumeOffIcon,
} from '@assets';

import {useTheme} from '@hooks';

import {IconBase, IconMappedKey, IconProps} from './iconTypes';

export function Icon({
  iconName,
  size = 'sp10',
  color = 'black',
  type,
  testID,
}: IconProps & IconBase) {
  const theme = useTheme();

  const IconRender = iconMapped[iconName];

  const _color = theme.colors[color];
  const _size = theme.spacing[size].toString();

  return <IconRender testID={testID} size={_size} color={_color} type={type} />;
}

const iconMapped: Record<IconMappedKey, React.ComponentType<IconBase>> = {
  tickSquare: TickSquare,
  closeSquare: CloseSquare,
  settings: Settings,
  home: HomeIcon,
  search: SearchIcon,
  document: DocumentIcon,
  arrowLeft: ArrowLeft,
  arrowDown: ArrowDown,
  activity: Activity,
  play: PlayIcon,
  pause: PauseIcon,
  volumeUp: VolumeUpIcon,
  arrowLeftCircle: ArrowLeftCircleIcon,
  arrowRightCircle: ArrowRightCircleIcon,
  bookmark: BookMarkIcon,
  paper: PaperIcon,
  timeSquare: TimeSquareIcon,
  download: DownloadIcon,
  volumeDown: VolumeDownIcon,
  volumeOff: volumeOffIcon,
};
