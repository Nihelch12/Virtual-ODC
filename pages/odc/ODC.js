
import dynamic from 'next/dynamic';
import Head from "next/head"
import Image from 'next/image';
import { StrictMode, useEffect, useState } from 'react';
import Script from "next/script";
import Chat from './Chat'
import Modal from '../Modal';


export default function Home() {
    const [scriptAlert, setScriptAlert] = useState();
    const [showModal, setShowModal] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);


    function toggleSound() {
        const muteBtn = document.querySelector('.mute-button');
        var myAudio = document.getElementById("myAudio");
        muteBtn.addEventListener('click', () => {
            myAudio.paused ? myAudio.play() : myAudio.pause();
            muteBtn.querySelectorAll('span').forEach(el => {
                el.classList.toggle('hidden');
            });
        });
    }


    function do_VidZoom() {
        //# setup animation keyframes : from scaleX/Y = 1 (normal size) up to scaleX/Y = 2 (double size)
        var frames_VidZoom_In = [
            { transform: 'scale(1, 1) ', transition: 'transform 0.1s' },

            { transform: 'scale(1.4, 1.4) translate(-10%,-10%)', transition: 'transform 0.1s' },


        ];

        //# apply animation to an element
        document.getElementById("vid").animate(frames_VidZoom_In, { duration: 2000, easing: 'ease-in' });


        //# set final size after animation ends ( or else it jumps back to scale=1 )
        document.getElementById("vid").style.transform = "scale(1.4, 1.4) translate(-10%,-10%)";

    }


    function decrease() {
        //# setup animation keyframes : from scaleX/Y = 1 (normal size) up to scaleX/Y = 2 (double size)
        var frames_VidZoom_In = [


            { transform: 'scale(1.4, 1.4) translate(-10%,-10%)', transition: 'transform 0.1s' },
            { transform: 'scale(1, 1) ', transition: 'transform 0.1s' },


        ];

        //# apply animation to an element
        document.getElementById("vid").animate(frames_VidZoom_In, { duration: 2000, easing: 'ease-out' });


        //# set final size after animation ends ( or else it jumps back to scale=1 )
        document.getElementById("vid").style.transform = "scale(1, 1) ";

    }

    return (
        <div>

            <Head>
                <title>Ecole du code</title>
                <Image
                    src="/images/menu.png"
                    alt="ODC"
                    width={1600}
                    height={82}
                    style={{ margin: "-4px" }}
                />
            </Head>

            <div id='wrap'>
                <div id='inner'>
                    <audio
                        id="myAudio" src="../../audio/Playground Fun.mp3" autoPlay>
                    </audio>
                    <div className="keypoint-calendar">
                        <img onClick={() => {
                            setShowCalendar(true);

                        }} src="/images/calendar.png" style={{ height: "52px", width: "53px" }} />
                    </div>
                    <Modal showCal={showCalendar} onClose={() => {
                        setShowCalendar(false);

                    }} />

                    <div className="keypoint-audio mute-button">
                        <span className="hidden"><img src="/images/soundmute.png" style={{ height: "36px", width: "37px" }} value="sound" onClick={toggleSound} /> </span>
                        <span> <img src="/images/audio.png" style={{ height: "36px", width: "37px" }} value="sound" onClick={toggleSound} /> </span>
                    </div>
                    <div className="keypoint-chat">
                        <img src="/images/chat.png" style={{ height: "30px", width: "30px" }}
                            onClick={() => {
                                setShowModal(true);
                                do_VidZoom()
                            }}
                        />
                    </div>

                    <Chat show={showModal} onClose={decrease} />
                    <div className="keypoint-home">
                        <a href='/'>
                            <img src="/images/Home.png" style={{ height: "52px", width: "53px" }} />
                        </a>
                    </div>
                    {/* <video id='vid' width={100} className='test2' src="../videos/CodingSchool9.mp4" >
                    </video> */}
                    <div >

                        <video autoPlay="autoPlay" loop="loop" muted src="../videos/CodingSchool9.mp4" id="vid" width="100%">

                        </video>

                    </div>

                </div>
            </div>

            <link rel="stylesheet" href="../../css/style.css" />
            <Script type="text/javascript" src="../../components/LcMouseDrag.js"
                onLoad={() => {
                    setScriptAlert(window.lc_mouseDrag('#inner', 0.3, false, false));
                }}>
            </Script>
            <Script src="../../components/lc-mouse-drag.min.js" type="text/javascript"></Script>

            {/* <Chat /> */}
        </div>

    )
}