import React from 'react';

import {Box} from '@components';

import {SharedScreenHeader} from './components/SharedScreenHeader';

interface Props extends React.PropsWithChildren {
  showLogo?: boolean;
  headerLeft?: React.JSX.Element;
  headerTitle?: string;
  headerRight?: React.JSX.Element;
  customPadding?: boolean;
}

export function SharedWrapperScreen({
  children,
  showLogo,
  headerLeft,
  headerRight,
  customPadding,
  headerTitle,
}: Props) {
  const renderHeader = showLogo || headerLeft || headerRight || headerTitle;
  return (
    <Box
      width={'100%'}
      flex={1}
      height={'100%'}
      justifyContent="center"
      backgroundColor="bgMain">
      {renderHeader && (
        <SharedScreenHeader
          showLogo={showLogo}
          headerLeft={headerLeft}
          headerTitle={headerTitle}
          headerRight={headerRight}
        />
      )}
      <Box
        flex={1}
        alignItems="center"
        justifyContent="center"
        width="100%"
        padding={customPadding ? undefined : 'sp25'}>
        {children}
      </Box>
    </Box>
  );
}
