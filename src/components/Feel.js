import React, { useState, useEffect } from 'react'
import { PlayCircleFilled } from '@ant-design/icons'
import { Typography, Input } from 'antd'
import bodymovin from 'lottie-web'

const { Text } = Typography
const { TextArea } = Input

export default function Feel(props) {
  const [className, setClassName] = useState('fade-enter')
  useEffect(() => {
    const anim = bodymovin.loadAnimation({
      container: document.getElementById('anim'), // Required
      animationData: require('../assets/animations/p16.json'), // Required
      renderer: 'canvas', // Required
      loop: false, // Optional
      autoplay: true, // Optional
      name: "p16", // Name for future reference. Optional.
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
        paddingBottom: 200,
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
          มันดีมากๆเลยหละ<br/>
          ที่เรื่องไม่สบายใจของใครสักคน <br/>
          มีใครสักคนรับฟัง
        </Text>
        <Text
          className="th-prompt"
          style={{
            textAlign: 'center',
            width: '100%',
            display: 'block',
            fontSize: '1.15em',
            fontStyle: 'italic',
            marginTop: 15
          }}
        >
          แล้วคุณหละรู้สึกยังไงบ้าง
        </Text>
        <TextArea
          maxLength={200}
          style={{
            height: 150,
            marginTop: 20
          }}
          onChange={(e) => props.setAnswer(e.target.value)}
          placeholder="พิมพ์คำตอบของคุณที่นี้"
          className="answer yellow th-prompt"
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
          width: '80%',
          height: 600,
          zIndex: 1,
          position: 'absolute',
          left: 30,
          bottom: -220
        }}
      />
    </>
  )
}
