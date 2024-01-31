import React, {createRef, useImperativeHandle, useState} from 'react';
import {Modal as ModalRN} from 'react-native';

interface ModalActions {
  show: (_content: () => JSX.Element) => void;
  close: () => void;
}
export const ModalRef = createRef<ModalActions>();

export function Modal() {
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState<JSX.Element>(<></>);

  function show(_content: () => JSX.Element) {
    setIsVisible(true);
    setContent(_content);
  }

  function close() {
    setIsVisible(false);
  }

  useImperativeHandle(ModalRef, () => ({show, close}), []);
  return <ModalRN visible={isVisible}>{content}</ModalRN>;
}
