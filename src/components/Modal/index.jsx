import Portal from './Portal'
import React, { useState } from 'react';

import { Dialog, Overlay } from './styles'

const Modal = ({ children, open, onClose }) => {
    useEffect(() => {
      function onEsc(event) {
        if (event.keyCode === 27) onClose();
      }
      window.addEventListener('keydown', onEsc);
  
      return () => {
        window.addEventListener('keydown', onEsc);
      };
    }, [onClose]);
  
    if (!open) return null;
  
    function onOverlayClick() {
      onClose();
    }
  
    function onDialogClick(event) {
      event.stopPropagation();
    }
  
    return (
      <Portal>
        <Overlay onClick={onOverlayClick}>
          <Dialog onClick={onDialogClick}>{children}</Dialog>
        </Overlay>
      </Portal>
    );
  };
  
  export default Modal;
