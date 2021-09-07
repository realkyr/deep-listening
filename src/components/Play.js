import React, { useState, useEffect } from "react";
import bodymovin from 'lottie-web'
import { Col, Row, Typography } from "antd";
const { Text } = Typography;

export default function Play(props) {
  const [className, setClassName] = useState('fade-enter')
  useEffect(() => {
    const anim = bodymovin.loadAnimation({
      container: document.getElementById('anim'), // Required
      animationData: require('../assets/animations/p15.json'), // Required
      renderer: 'canvas', // Required
      loop: true, // Optional
      autoplay: true, // Optional
      name: "p15", // Name for future reference. Optional.
    })
    const audio = document.querySelector('#audio')
    audio.addEventListener('ended', () => {
      props.turnOnVolume()
      props.setStep(props.step + 1)
    })
    audio.addEventListener('play', () => {
      props.lowerVolume()
    })
    anim.addEventListener('DOMLoaded', () => {
      console.log('data ready')
      setClassName('fade-enter-active')
    })
  }, [])
  return (
    <>
      <div style={{ paddingBottom: '35vh' }}>
        <Text
          className="th-prompt"
          style={{
            textAlign: "center",
            width: "100%",
            display: "block",
            fontSize: '1.15em',
            marginTop: 20,
            marginBottom: 20
          }}
        >
          สุดท้ายแล้ว <br/>
          มาลองเป็นผู้ฟัง(ที่ดี)กัน
        </Text>
        <Row justify="center">
          <Col xs={16}>
            <audio style={{ width: '100%', zIndex: 2, position: 'relative' }} id="audio" controls autoPlay>
              <source src={require('../assets/Mixdown.mp3').default} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </Col>
        </Row>
        <Text
          className="blink_me th-prompt"
          style={{
            textAlign: "center",
            width: "100%",
            marginTop: 20,
            display: "block",
            fontSize: '1.15em',
            color: "#DD644C",
            fontStyle: 'italic'
          }}
        >
          ใส่หูฟังเพื่อเพิ่มอรรถรสในการฟัง
        </Text>
      </div>
      <div
        id="anim"
        className={className}
        style={{
          width: '100%',
          height: 600,
          zIndex: 1,
          position: 'absolute',
          left: 0,
          bottom: -200
        }}
      />
    </>
  );
}
