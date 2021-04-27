import React, { useState, useEffect } from "react";
import bodymovin from 'lottie-web'

export default function Subtitle(props) {
  const [anim, setAnim] = useState('')

  useEffect(() => {
    const animation = bodymovin.loadAnimation({
      container: document.getElementById('subtitle'), // Required
      animationData: require('../assets/animations/subtitle.json'), // Required
      renderer: 'canvas', // Required
      loop: false, // Optional
      autoplay: true, // Optional
      name: "subtitle", // Name for future reference. Optional.
    })
    setAnim(animation)
  }, [])

  useEffect(() => {
    if (!anim) return
    anim.addEventListener('complete', () => {
      const el = document.getElementById('transitionbubble')
      el.className = "sec-transition full"
      setTimeout(() => {
        document.body.style.transition = "all 2s"
        document.body.style.background = "#F9F7ED"
      }, 2000)
      setTimeout(() => {
        document.querySelector('#content').style.background = "#F9F7ED"
        props.setStep(2)
      }, 2100)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anim])

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      background: '#1C1C1C',
      position: 'relative'
    }}>
      <div id="transitionbubble" className="sec-transition"></div>
      <div
        id="subtitle"
        style={{
          width: window.innerWidth,
          height: 600
        }}
      >
      </div>
    </div>
  )
}
