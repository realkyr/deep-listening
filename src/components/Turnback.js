import React, { useState, useEffect } from 'react'
import { PlayCircleFilled } from '@ant-design/icons'
import { Typography, Input } from 'antd'
import bodymovin from 'lottie-web'

const { Text } = Typography
const { TextArea } = Input

export default function Turnback(props) {
  const [className, setClassName] = useState('fade-enter')
  useEffect(() => {
    const anim = bodymovin.loadAnimation({
      container: document.getElementById('anim'), // Required
      animationData: require('../assets/animations/p18.json'), // Required
      renderer: 'canvas', // Required
      loop: true, // Optional
      autoplay: true, // Optional
      name: "p18", // Name for future reference. Optional.
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
        height: '100%',
        paddingBottom: 230,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Text
          className="th-prompt"
          style={{
            textAlign: 'center',
            width: '100%',
            display: 'block',
            fontSize: '1.15em'
          }}
        >
          ถ้าย้อนเวลากลับไปได้ <br/>
          อยากบอกอะไรกับตัวเอง<br/>
          หลังจากได้ลองทบทวนตัวเองแล้วบ้าง<br/>
        </Text>
        <TextArea
          maxLength={200}
          style={{
            height: 150,
            marginTop: 20
          }}
          onChange={(e) => props.setAnswer(e.target.value)}
          placeholder="พิมพ์คำตอบของคุณที่นี้"
          className="answer red th-prompt"
          onPressEnter={() => alert('enter')}
        />
        {
          props.answer ? <Text
            onClick={() => props.setStep(props.step + 1)}
            className="th-prompt"
            style={{
              zIndex: 99,
              position: 'relative',
              textAlign: 'right',
              cursor: 'pointer',
              width: '100%',
              display: 'block',
              fontSize: 18,
              marginTop: 10,
              paddingRight: 20
            }}
          >
            ถัดไป <PlayCircleFilled size="large" />
          </Text> : <div style={{ marginTop: 10, height: 28 }} />
        }
      </div>
      <div
        id="anim"
        className={className}
        style={{
          height: 400,
          width: '100%',
          zIndex: 1,
          position: 'absolute',
          left: 0,
          bottom: -100
        }}
      />
    </>
  )
}
