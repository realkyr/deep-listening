import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import bodymovin from 'lottie-web'
const { Text } = Typography;

export default function SurveySec(props) {
  const [className, setClassName] = useState('fade-enter')
  useEffect(() => {
    const anim = bodymovin.loadAnimation({
      container: document.getElementById('anim'), // Required
      animationData: require('../assets/animations/p11.json'), // Required
      renderer: 'canvas', // Required
      loop: true, // Optional
      autoplay: true, // Optional
      name: "p11", // Name for future reference. Optional.
    })
    anim.addEventListener('DOMLoaded', () => {
      console.log('data ready')
      setClassName('fade-enter-active')
    })
  }, [])
  return (
    <>
      <div style={{ marginBottom: 100 }}>
        <Text
          className="th-prompt"
          style={{
            textAlign: "center",
            width: "100%",
            display: "block",
            fontSize: 18,
            fontWeight: 700,
            marginBottom: 30
          }}
        >
          ตลอดเวลาที่ผ่านมา<br/>
          คุณแทบไม่ได้สังเกต<br/>
          เรื่องนี้เลยใช่ไหมหละ
        </Text>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            position: 'relative',
            zIndex: 2
          }}
        >
          <Text
            className="th-prompt"
            style={{
              textAlign: "center",
              width: '80%',
              display: "block",
              fontSize: 16,
              padding: '10px 10px',
              marginBottom: 20,
              borderRadius: '15px',
              background: 'rgba(71, 94, 234, 0.45)',
              fontStyle: 'italic'
            }}
            onClick={() => {
              props.setStep(14);
              props.setSA(1);
            }}
          >
            ใช่
          </Text>
          <Text
            className="th-prompt"
            style={{
              width: '80%',
              textAlign: "center",
              display: "block",
              fontSize: 16,
              padding: '10px 10px',
              marginBottom: 20,
              borderRadius: '15px',
              background: 'rgba(219, 100, 77, 0.45)',
              fontStyle: 'italic'
            }}
            onClick={() => {
              props.setStep(14);
              props.setSA(2);
            }}
          >
            ไม่ใช่
          </Text>
        </div>
      </div>
      <div
        id="anim"
        className={className}
        style={{
          height: 500,
          width: '100%',
          zIndex: 1,
          position: 'absolute',
          left: 0,
          bottom: -180
        }}
      />
    </>
  );
}
