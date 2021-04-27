import React, { useState, useEffect } from 'react'
import { Typography } from 'antd'
import bodymovin from 'lottie-web'

const { Text } = Typography

export default function Hearing(props) {
  const [className, setClassName] = useState('fade-enter')
  useEffect(() => {
    const anim = bodymovin.loadAnimation({
      container: document.getElementById('anim'), // Required
      animationData: require('../assets/animations/p14.json'), // Required
      renderer: 'canvas', // Required
      loop: true, // Optional
      autoplay: true, // Optional
      name: "p14", // Name for future reference. Optional.
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
            top: -200
          }}
        />
        <Text className="th-chonburi" style={{
            width: '100%',
            display: 'block',
            fontSize: 18,
            paddingTop: 380
          }}>
          เสียง(ที่ไม่ได้ยิน)
        </Text>
        <Text className="th-prompt"
          style={{
            width: '100%',
            display: 'block',
            textIndent: 40,
            fontSize: '1.05em'
          }}
        >
          เวลารู้สึกเศร้า หลายคนมักจะพาตัวเองกลับ<br/>
          ไปที่บ้านเพื่อชาร์ทพลัง ระบายปัญหาให้ใครสักคนฟัง<br/> เพราะมั่นใจว่าจะถูกรับฟังโดยที่เขาจะไม่เบื่อ<br/> แต่มันกลับตรงข้าม
        </Text>
        <Text style={{
          marginTop: 30,
          cursor: 'pointer',
          background: '#231F20',
          color: 'white',
          width: 100,
          display: 'flex',
          justifyContent: 'center',
          padding: 10,
          borderRadius: 20,
          position: 'relative',
          zIndex: 99
        }} onClick={() => props.setStep(props.step + 1)} className="th-prompt">
          ถัดไป
        </Text>
      </div>
    </>
  )
}
