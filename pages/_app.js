import '../styles/globals.css'
import '../public/css/style.css'

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import React from 'react';
import { StrictMode } from 'react';

// function ToggleSound() {

//   useEffect(() => {
//     var muteBtn = document.querySelector('.mute-button');

//     var myAudio = document.getElementById("myAudio");
//     muteBtn.addEventListener('click', () => {
//       myAudio.paused ? myAudio.play() : myAudio.pause();
//       muteBtn.querySelectorAll('span').forEach(el => {
//         el.classList.toggle('hidden');
//       });
//     })
//   });


//   return (
//     <>
//       <audio
//         id="myAudio" src="../../audio/Playground Fun.mp3" autoPlay>
//       </audio>
//       <div className="keypoint-calendar">
//         <img src="/images/calendar.png" style={{ height: "52px", width: "53px" }} />
//       </div>

//       <div className="keypoint-audio mute-button">
//         <span className="hidden"><img src="/images/soundmute.png" style={{ height: "36px", width: "37px" }} value="sound" onClick={ToggleSound} /> </span>
//         <span> <img src="/images/audio.png" style={{ height: "36px", width: "37px" }} value="sound" onClick={ToggleSound} /> </span>
//       </div>
//     </>
//   )
// }

function Loading() {

  useEffect(() => {

    var loader = document.getElementById('loader');

    return () => {
      loader.style.left = "0";
      setTimeout(function () {
        loader.style.left = "200%";
      }, 250)

    }
  })

  return (
    <div className="loader" id="loader">
      <img src="../images/Cloud-transition(1).png" alt="" />
    </div>)

}
function MyApp({ Component, pageProps }) {
  const [isFirstRun, setIsFirstRun] = useState(true);

  useEffect(() => {

    setIsFirstRun(sessionStorage.getItem('isFirstRun'))

  }, [isFirstRun])

  if (isFirstRun == 'false') {
    return (
      <>
      <StrictMode>
        <Loading />
        </StrictMode>
        <Component {...pageProps} />
        {/* <ToggleSound /> */}
        
      </>
    )
  } else {

    return (
      <>
       <StrictMode/>
        <Component {...pageProps} />
        {/* <ToggleSound /> */}
      
      </>
    )
  }
}

export default MyApp
