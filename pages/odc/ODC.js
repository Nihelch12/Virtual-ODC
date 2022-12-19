
import dynamic from 'next/dynamic';

export default function Home() {


    return (
        <div>
            <head>
                <meta charset="utf-8" />
                <title>Ecole du code</title>
            </head>

        
                {/* <a style={{position:"absolute"}} href="/index.html" class="room__contact u-box-1by1 u-bg-white u-shadow u-round u-cursor-pointer router-link-active">
                    <div>
                        <img src="home-icon.png" height="100%" width="100%" style={{padding: "11px;"}} />
                    </div>
                </a> */}
                {/* <button onclick="sampleFunction" value="Display" >Get Zip Help!</button> */}

                <div id="wrap">
                    <div id="inner">
                        <video autoplay loop muted src="../videos/CodingSchool7.mp4"> </video>
                    </div>
                </div>
{/* 
                <script src="test.js" type="text/javascript"></script>
                <script src="lc-mouse-drag.js" type="text/javascript"></script>
                <script src="lc-mouse-drag.min.js" type="text/javascript"></script>
                <link rel="stylesheet" href="../css/style.css" /> */}


                {/* <script type="text/javascript"> lc_mouseDrag('#inner', 0.3, false, false) </script> */}
           
        </div>
    )
}