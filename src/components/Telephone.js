import React, { useState, useEffect } from 'react'
import { Typography } from 'antd'
import bodymovin from 'lottie-web'

const { Text } = Typography

export default function Telephone(props) {
  const [className, setClassName] = useState('fade-enter')
  useEffect(() => {
    const anim = bodymovin.loadAnimation({
      container: document.getElementById('anim'), // Required
      animationData: require('../assets/animations/p7.json'), // Required
      renderer: 'canvas', // Required
      loop: true, // Optional
      autoplay: true, // Optional
      name: "p7", // Name for future reference. Optional.
    })
    anim.addEventListener('DOMLoaded', () => {
      console.log('data ready')
      setClassName('fade-enter-active')
    })
  }, [])

  return (
    <>
      <div style={{
        background: '#F9F7ED',
        width: '100%',
        height: '100%'
      }}>
        <div
          id="anim"
          className={className}
          style={{
            height: 600,
            width: '100%',
            position: 'absolute',
            left: 0,
            top: -120
          }}
        />
        <Text className="th-chonburi" style={{
          width: '100%',
          display: 'block',
          fontSize: '1.25em',
          textAlign: 'center',
          paddingTop: 400
        }}>
          “คนในครอบครัวของเรา<br/>
          หรือเราเริ่มมีโลกส่วนตัวมากเกินไป<br/>
          จนละเลยการฟังคนข้าง ๆ <br/> ไปหรือเปล่า ”
        </Text>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <div onClick={() => props.setStep(props.step + 1)} className="half-circle bottom">
            <span>NEXT</span>
          </div>
        </div>
      </div>
    </>
  )
}
