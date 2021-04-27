import React, { useState, useEffect } from 'react'
import { Typography } from 'antd'
import bodymovin from 'lottie-web'

const { Title, Text } = Typography

export default function SurveyAns (props) {
  // useEffect(() => {
  // const clear = setTimeout(() => {
  //   props.setStep(props.step+1)
  // }, 8000)

  // return () => clearTimeout(clear)
  // }, [props])
  const [className, setClassName] = useState('fade-enter')
  useEffect(() => {
    const anim = bodymovin.loadAnimation({
      container: document.getElementById('anim'), // Required
      animationData: require('../assets/animations/p12.json'), // Required
      renderer: 'canvas', // Required
      loop: true, // Optional
      autoplay: true, // Optional
      name: "p12", // Name for future reference. Optional.
    })
    anim.addEventListener('DOMLoaded', () => {
      console.log('data ready')
      setClassName('fade-enter-active')
    })
  }, [])

  const content = () => {
    switch (props.surveyAns) {
      case 1:
        return (
          <div style={{
            padding: 30
          }} className="th-prompt">
            <Title
              style={{
                fontSize: '1.2em',
                fontStyle: 'italic',
                textAlign: 'center'
              }}
              level={5}
            >
              “ ฉันฟังอยู่ตลอดเวลา “
            </Title>
            <Text style={{
              fontSize: '1.15em',
              textAlign: 'center',
              display: "block"
            }}>
              ลองคิดให้ลึกลงไปอีกนิดสิ<br/>
              ว่าเรารับรู้ได้ถึงความรู้สึกเบื้องหลัง<br/>
              ของผู้คนเหล่านั้นด้วยหรือไม่<br/>
              หรือแค่ได้ยินเสียงที่เขาพูดออกมา<br/>
              แล้วรอที่จะตอบโต้สิ่งที่เราคิดกลับไป
            </Text>
            <Text style={{
              textAlign: 'center',
              display: "block",
              fontSize: '1.15em',
              marginTop: 20
            }}>
              กลายเป็นว่าสิ่งที่เราฟังอยู่<br/>
              ไม่ใช่เสียงของคนที่เราควรรับฟัง<br/>
              แต่กลายเป็นเสียงของตัวเราเอง
            </Text>
          </div>
        )
      case 2:
        return (
          <div style={{
            padding: 30
          }} className="th-prompt">
            <Title
              style={{
                fontSize: '1.2em',
                fontStyle: 'italic',
                textAlign: 'center'
              }}
              level={5}
            >
              “ ก็คิดว่าฟังอยู่นะ“
            </Title>
            <Text style={{
              fontSize: '1.15em',
              textAlign: 'center',
              display: "block"
            }}>
              ลองคิดให้ลึกลงไปอีกนิดสิ<br/>
              ว่าเรารับรู้ได้ถึงความรู้สึกเบื้องหลัง<br/>
              ของผู้คนเหล่านั้นด้วยหรือไม่<br/>
              หรือแค่ได้ยินเสียงที่เขาพูดออกมา<br/>
              แล้วรอที่จะตอบโต้สิ่งที่เราคิดกลับไป
            </Text>
            <Text style={{
              textAlign: 'center',
              display: "block",
              fontSize: '1.15em',
              marginTop: 20
            }}>
              กลายเป็นว่าสิ่งที่เราฟังอยู่<br/>
              ไม่ใช่เสียงของคนที่เราควรรับฟัง<br/>
              แต่กลายเป็นเสียงของตัวเราเอง
            </Text>
          </div>
        )
      case 3:
        return (
          <div style={{
            padding: 30
          }} className="th-prompt">
            <Title
              style={{
                fontSize: '1.2em',
                fontStyle: 'italic',
                textAlign: 'center'
              }}
              level={5}
            >
              “ ฉันเลือกที่จะฟังแค่บางเรื่อง “
            </Title>
            <Text style={{
              fontSize: '1.15em',
              textAlign: 'center',
              display: "block"
            }}>
              ลองคิดให้ลึกลงไปอีกนิดสิ<br/>
              ว่าเรารับรู้ได้ถึงความรู้สึกเบื้องหลัง<br/>
              ของผู้คนเหล่านั้นด้วยหรือไม่<br/>
              หรือแค่ได้ยินเสียงที่เขาพูดออกมา<br/>
              แล้วรอที่จะตอบโต้สิ่งที่เราคิดกลับไป
            </Text>
            <Text style={{
              textAlign: 'center',
              display: "block",
              fontSize: '1.15em',
              marginTop: 20
            }}>
              กลายเป็นว่าสิ่งที่เราฟังอยู่<br/>
              ไม่ใช่เสียงของคนที่เราควรรับฟัง<br/>
              แต่กลายเป็นเสียงของตัวเราเอง
            </Text>
          </div>
        )
      default:
        break
    }
  }
  return (
    <div>
      <div
        id="anim"
        className={className}
        style={{
          height: 600,
          zIndex: 1,
          width: '100%',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div>
        {content()}
      </div>
    </div>
  )
}
