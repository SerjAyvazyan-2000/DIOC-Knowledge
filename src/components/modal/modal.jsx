import React from 'react';
import './modal.scss'

const Modal = ({children, active,close}) => {
    return <div className={`modal-block G-center ${active ? 'active' : ''}`}>
        <div onClick={close} className='modal-bg'></div>
        {children}
    </div>
};

export default Modal;