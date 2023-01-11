import { useEffect, useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import ListCard from '../public/components/ListCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faXmark, faXmarkSquare } from '@fortawesome/free-solid-svg-icons';

export default function Modal({ showCal, onClose, children }) {

    const [isBrowserCalendar, setIsBrowserCalendar] = useState(false);

    useEffect(() => {
        setIsBrowserCalendar(true)
    }, []);

    const handleClose = (e) => {
        e.preventDefault();

        document.getElementById("calendar-elem").classList.remove("animate-bottom")
        document.getElementById("calendar-elem").classList.add("animate-top")

        /*document.getElementById("calendar-elem").addEventListener("animationend",(e)=>{
            onClose()    
        })*/

        setTimeout(() => {

            onClose()

        }, 700);

    };

    const modalContentt = showCal ? (
        <div className="overlay " >
            <div id='calendar-elem' className="modal animate-bottom ">
                <div className="modalheader">
                    <a href="#" onClick={handleClose}>
                         <FontAwesomeIcon
                            icon={faXmark}
                            style={{marginBottom:'3px',marginRight:'10px', fontSize: 16, color: "white",backgroundColor:"black" }}
                        />
                      
                    </a>
                </div>
                <p style={{ paddingLeft: '5px', fontSize: '14px', fontWeight: ' bold' }}>This is the list of all the upcoming events at Orange Digital Center</p>
                <ListCard />
                <ListCard />
                <ListCard />

                <div className="modalbody">{children}</div>
            </div>
            <link rel="stylesheet" href="../../css/style.css" />
        </div>

    ) : null;

    if (isBrowserCalendar) {
        return ReactDOM.createPortal(
            modalContentt,
            document.getElementById("modal-root")
        )
    } else {
        return null;
    }
}