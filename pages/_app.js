import '../styles/globals.css'

import { useState, useEffect } from 'react'

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

  return (<><Loading /><Component {...pageProps} /></>)
}

export default MyApp
