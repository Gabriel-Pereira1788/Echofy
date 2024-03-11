import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {ModalProps, Modal as ModalRN} from 'react-native';

export interface ModalActions {
  show: () => void;
  close: () => void;
}
type Props = {} & Omit<ModalProps, 'visible'>;

export const Modal = forwardRef<ModalActions, Props>(
  ({children, ...modalProps}, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    function show() {
      setIsVisible(true);
    }

    function close() {
      setIsVisible(false);
    }

    useImperativeHandle(ref, () => ({show, close}), []);
    return (
      <ModalRN {...modalProps} visible={isVisible}>
        {children}
      </ModalRN>
    );
  },
);
