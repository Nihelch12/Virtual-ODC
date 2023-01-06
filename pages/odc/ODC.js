
import dynamic from 'next/dynamic';
import Head from "next/head"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Script from "next/script";
import Modal from '../../public/components/Modal';
import Chat from './Chat'

// const Chat = dynamic(
//     () => {
//         return import("./Chat")
//     },
//     { ssr: false }
// );


export default function Home() {
    const [scriptAlert, setScriptAlert] = useState();
    const [showModal, setShowModal] = useState(false);

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
    var difference = 2;
    var intervalID = 0;
    var width = 100;
    function increase() {
        intervalID = setInterval(zoomIn, 20);
    }

    function zoomIn() {
        if (width < 200) {
            width = width + difference;
            document.getElementById('video').style.width = width;
        }
        else {
            clearInterval(intervalID);
        }
    }

    return (
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
                        <img src="/images/calendar.png" style={{ height: "52px", width: "53px" }} />
                    </div>

                    <div className="keypoint-audio mute-button">
                        <span className="hidden"><img src="/images/soundmute.png" style={{ height: "36px", width: "37px" }} value="sound" onClick={toggleSound} /> </span>
                        <span> <img src="/images/audio.png" style={{ height: "36px", width: "37px" }} value="sound" onClick={toggleSound} /> </span>
                    </div>
                    <div className="keypoint-chat">
                        <img src="/images/chat.png" style={{ height: "30px", width: "30px" }}
                            onClick={() => {
                                setShowModal(true);
                                increase();
                            }}
                        />
                    </div>
                    <Chat show={showModal} />
                    <div className="keypoint-home">
                        <a href='/odc/Home'>
                            <img src="/images/Home.png" style={{ height: "52px", width: "53px" }} />
                        </a>
                    </div>
                    <video id='video' style={{ width: "100%" }} className='test2' autoPlay="autoPlay" loop="loop" muted src="../videos/CodingSchool9.mp4" >
                    </video>

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