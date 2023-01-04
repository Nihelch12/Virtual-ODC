
import dynamic from 'next/dynamic';
import Head from "next/head"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Script from "next/script";


const Chat = dynamic(
    () => {
        return import("./Chat")
    },
    { ssr: false }
);


export default function Home() {
    const [scriptAlert, setScriptAlert] = useState();

    // const [modalState, setmodalState] = useState(false);


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
                    <div className="icon" style={{ top: "80px", left: " 68px" }}>

                    </div>
                    <video className='test2' autoPlay="autoPlay" loop="loop" muted src="../videos/CodingSchool9.mp4" >
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

            <Chat />
        </div>

    )
}