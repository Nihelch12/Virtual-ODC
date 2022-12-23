
import dynamic from 'next/dynamic';
import Head from "next/head"
import Script from 'next/script';

const Chat = dynamic(
    () => {
      return import("../../pages/index");
    },
    { ssr: false }
  );
export default function Home() {


    return (
        <div>
            <Head>
                <meta charset="utf-8" />
                <title>Ecole du code</title>
            </Head>

            <img src="/menu.png" style={{top:"0px" , left: "0px",  width:" 1920px",height: "100px", margin:"-20px" }} />
                {/* <a style={{position:"absolute"}} href="/index.html" class="room__contact u-box-1by1 u-bg-white u-shadow u-round u-cursor-pointer router-link-active">
                    <div>
                        <img src="home-icon.png" height="100%" width="100%" style={{padding: "11px;"}} />
                    </div>
                </a> */}
                {/* <button onclick="sampleFunction" value="Display" >Get Zip Help!</button> */}

                <div id='wrap' >
                    <div id='inner'>
                        <video autoPlay="autoPlay" loop="loop" muted src="../videos/CodingSchool7.mp4" style={{transform: "translateY(-100px) translateX(-460px)"}}> 
                        </video>
                       
                    </div>
                   
                </div>

               
                <link rel="stylesheet" href="../css/style.css" /> 

{/* <MouseDrag/> */}
               {/* <Script type="text/javascript"> "lc_mouseDrag ('#inner', 0.3, false, false)" </Script> */}
             
               <Chat />
        </div>
        
    )
}