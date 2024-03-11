import React, {useRef} from 'react';

import {ModalActions} from '@components';

export interface CommonModalProps {
  onClose: () => void;
  refModalActions: React.MutableRefObject<ModalActions | null>;
}

export function useModalController<ComponentProps>(
  ModalComponent: React.ComponentType<CommonModalProps & ComponentProps>,
) {
  const refModalActions = useRef<ModalActions>(null);

  function onOpenModal() {
    refModalActions.current?.show();
  }
  function onCloseModal() {
    refModalActions.current?.close();
  }

  return {
    Modal: (props: ComponentProps) => (
      <ModalComponent
        refModalActions={refModalActions}
        onClose={onCloseModal}
        {...props}
      />
    ),
    onCloseModal,
    onOpenModal,
  };
}
