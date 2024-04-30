import React from 'react';

type Props = {
  condition: boolean;
  children: React.ReactNode;
};

export function RenderIF({condition, children}: Props) {
  if (!condition) {
    return null;
  }

  return <>{children}</>;
}
