import Head from "next/head"
import dynamic from 'next/dynamic';
import Script from "next/script";
import { useEffect, useState } from 'react';
import Image from "next/image";

export default function Home() {
    const [scriptAlert, setScriptAlert] = useState();
    function toggle() {
        var blur = document.getElementsByClassName('blur');

        for (var i = 0; i < blur.length; i++) {
            blur[i].classList.toggle('active')
        }
        document.getElementById('popup').classList.toggle('active');
    };

    function togglePlay() {
        var myAudio = document.getElementById("myAudio");
        return myAudio.paused ? myAudio.play() : myAudio.pause();
    };

   

    useEffect(() => {
        // toggle()
         return () => toggle();
    }, []);

    // useEffect(() => {
    //     toggle()     
    // }, []);



    return (
        <>
            <div>
                <Head>
                    <title>Virtual Orange Digital Center</title>
                    <Image
                        src="/images/menu.png"
                        alt="ODC"
                        width={1600}
                        height={82}
                        style={{ margin: "-4px" }}
                    />
                </Head>
            </div>
            <div id="wrap" >
                <div id="inner">
                    <audio
                        id="myAudio" src="../../audio/Playground Fun.mp3" autoPlay>
                    </audio>
                    <div className="keypoint-calendar">
                        <img src="/images/Calendar.png" style={{height: "30px", width: "33px"}} />
                    </div>
                    <div className="keypoint-audio">
                        <img src="/images/audio.png" style={{height: "25px", width: "28px"}} value="sound" onClick={togglePlay}/>
                    </div>
                    <div className="icon blur">
                        <div className="tooltip" style={{ top: "240px", left: " 715px" }}>
                            Ecole du code
                        </div>
                        <div className="keypoint-1" style={{ height: "30px", width: "30px" }}>
                            <a href="/odc/ODC"></a>
                        </div>
                    </div>

                    <div className="icon blur">
                        <div className="tooltip" style={{ top: "480px", left: " 618px" }}>
                            Orange Fab
                        </div>
                        <div className="keypoint-2" style={{ height: "30px", width: "30px" }}>
                            <a href="/odc/OrangeFab"></a>
                        </div>
                    </div>

                    <div className="icon blur">
                        <div className="tooltip" style={{ top: "635px", left: " 1271px" }}>
                            Fab Lab
                        </div>
                        <div className="keypoint-3" style={{ height: "30px", width: "30px" }}>
                            <a href="/odc/FabLab"></a>
                        </div>
                    </div>
                    <div>
                        <video className="blur" autoPlay="autoPlay" loop="loop" muted src="../videos/VODCTest15.mp4"> </video>
                    </div>
                </div>
            </div>

            <div id="popup">
                <h3>Welcome to the Orange Digital Center Virtual Tour</h3>
                <p> Orange Digital Center houses four strategic programs under the same roof : the coding school, the FabLab Solidaire, Orange Fab and Orange Digital Ventures Africa. </p>
                <button className="button" href="#" onClick={toggle}>Start the tour</button>
            </div>

            <link rel="stylesheet" href="../../css/style.css" />
            <Script type="text/javascript" src="../../components/LcMouseDrag.js"
                onLoad={() => {
                    setScriptAlert(window.lc_mouseDrag('#inner', 0.3, false, false));
                }}>
            </Script>
            <Script src="../../components/lc-mouse-drag.min.js" type="text/javascript"></Script>


        </>
    )

}