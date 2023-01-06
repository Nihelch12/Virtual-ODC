import { useEffect, useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
export default function Modal({show,onClose,children}) {

    const [isBrowser, setIsBrowser] = useState(false);
    
    useEffect(() => {
        setIsBrowser(true)    
    }, []);

    const handleClose = (e) =>{
        e.preventDefault();
        onClose();
    };

    const modalContent = show ? (
        <div className="overlay" >
            <div className="modal">
                <div className="modalheader">
                    <a href="#" onClick={handleClose}>
                        <button>Close</button>
                    </a>
                </div>
                <div className="modalbody">{children}</div>
            </div>
            <link rel="stylesheet" href="../../css/style.css" />
        </div>

    ): null;

    if (isBrowser){
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        )
    } else {
        return null;
    }
}