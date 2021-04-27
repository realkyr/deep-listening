import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import bodymovin from 'lottie-web'

const { Text } = Typography;

export default function Solution(props) {
  const [className, setClassName] = useState('fade-enter')
  useEffect(() => {
    // const clear = setTimeout(() => {
    //   props.setStep(props.step+1)
    // }, 8000)

    // return () => clearTimeout(clear)
    const anim = bodymovin.loadAnimation({
      container: document.getElementById('anim'), // Required
      animationData: require('../assets/animations/p9.json'), // Required
      renderer: 'canvas', // Required
      loop: true, // Optional
      autoplay: true, // Optional
      name: "p9", // Name for future reference. Optional.
    })
    anim.addEventListener('DOMLoaded', () => {
      console.log('data ready')
      setClassName('fade-enter-active')
    })
  }, [])

  return (
    <div>
      <div
        id="anim"
        className={className}
        style={{
          height: 400,
          width: '100%',
          position: 'absolute',
          right: -32,
          top: -110
        }}
      />
          
      <div style={{
        paddingTop: 300,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Text
          className="th-prompt"
          style={{
            width: "85%",
            display: "block",
            fontSize: '1em',
            fontWeight: 700,
            padding: 15,
            textAlign: 'center',
            background: '#F9F7ED',
            borderRadius: 20,
            fontStyle: 'italic',
            border: '2px solid #475DED'
          }}
        >
          "ความหวังดีที่เกินขอบเขต<br/>จนไม่รับฟังเสียงแห่งเหตุและผล<br/>
          มักเป็นต้นเหตุของความขัดแย้ง<br/>
          ให้เกิดขึ้นในครอบครัวได้เสมอ"
        </Text>
        <Text
          className="th-prompt"
          style={{
            width: "85%",
            display: "block",
            marginTop: 20,
            fontSize: '1em',
            fontWeight: 700,
            padding: 15,
            textAlign: 'center',
            background: '#F9F7ED',
            borderRadius: 20,
            fontStyle: 'italic',
            border: '2px solid #F6D648'
          }}
        >
          " ในความเป็นจริง คำพูดบางคำ<br/>หรือการพูดคุยถามไถ่ถึงกัน<br/>
          อาจทำหน้าที่เชื่อมความสัมพันธ์<br/>ในครอบครัวได้ดีกว่าเงิน ”
        </Text>
      </div>
    </div>
  );
}
