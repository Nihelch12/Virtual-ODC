import { useEffect, useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import ListCard from '../public/components/ListCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Modal({ showCal, onClose, children }) {

    const [isBrowserCalendar, setIsBrowserCalendar] = useState(false);

    useEffect(() => {
        setIsBrowserCalendar(true)
    }, []);

    const handleClose = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = showCal ? (
        <div className="overlay"  >
            <div className="modal">
                <div className="modalheader">
                    <a href="#" onClick={handleClose}>
                        <button><i class="fa-sharp fa-solid fa-xmark"></i>
                        </button>
                    </a>
                </div>
                <p style={{ paddingLeft: '5px', fontSize: '14px', fontWeight: ' bold' }}>This is the list of all the upcoming events at Orange Digital Center</p>
                <ListCard />
                <ListCard />
                <div className="modalbody">{children}</div>
            </div>
            <link rel="stylesheet" href="../../css/style.css" />
        </div>

    ) : null;

    if (isBrowserCalendar) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        )
    } else {
        return null;
    }
}