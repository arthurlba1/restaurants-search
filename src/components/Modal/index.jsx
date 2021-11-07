import Portal from './Portal'
import React, { Children } from 'react';

import { Dialog, Overlay } from './styles'

const Modal = ({ children, open, onClose }) => {
    if(!open) return null;

    function onOverlayClick() {
        onClose();
    }
    
    function onDialogClick(event) {
        event.stopPropagation();
    }
    
    return (
        <Portal>
            <Overlay onClick={onOverlayClick}>
                <Dialog>
                    {children}
                </Dialog>
            </Overlay>
        </Portal>
    )
}

export default Modal;
