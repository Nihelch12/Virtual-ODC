import Head from "next/head"
import dynamic from 'next/dynamic';
import Script from "next/script";
import { useState } from 'react';
import Image from "next/image";

export default function Home() {
    const [scriptAlert, setScriptAlert] = useState();
    function toggle() {
        document.getElementById('blur').classList.toggle('active');
    };

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
            <div id="wrap">
                <div id="inner">
                    {/* <div className="loader" id="loader">
                        <img src="Cloud-transition(1).png" alt="" />
                    </div> */}
                    <button onClick={toggle}> test</button>

                    <audio autoPlay src="../../audio/Playground Fun.mp3"></audio>
                    <div className="icon">
                        <div className="tooltip" style={{ top: "240px", left: " 715px" }}>
                            Ecole du code
                        </div>
                        <div className="keypoint-1" style={{ height: "30px", width: "30px" }}>
                            <a href="odc.html"></a>
                        </div>
                    </div>

                    <div className="icon">
                        <div className="tooltip" style={{ top: "480px", left: " 618px" }}>
                            Orange Fab
                        </div>
                        <div className="keypoint-2" style={{ height: "30px", width: "30px" }}>
                            {/* <a onClick="appearP2()"></a> */}
                        </div>
                    </div>

                    <div className="icon">
                        <div className="tooltip" style={{ top: "635px", left: " 1271px" }}>
                            Fab Lab
                        </div>
                        <div  className="keypoint-3" style={{ height: "30px", width: "30px" }}>
                            {/* <a onClick="appearP3()"></a> */}
                        </div>
                    </div>

                    <div>
                        <video  id="blur" autoPlay="autoPlay" loop="loop" muted src="../videos/VODCtest13.mp4"> </video>

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
            {/* <script type="text/javascript"
                onLoad={() => {
                    function toggle(){
                        document.getElementById('blur').classList.toggle('active')
                    }
                }}
            >
            </script> */}


        </>
    )

}