import React from 'react'
import { Typography, Button } from 'antd'

const { Text } = Typography

export default function Yesno(props) {
  return (
    <div style={{ padding: 10}}>
      <Text
        className="th-prompt"
        style={{
          textAlign: 'center',
          width: '85%',
          display: 'block',
          fontSize: '1.15em'
        }}
      >
        ขณะนั่งรับประทานอาหารร่วมกัน<br/>
        คุณยังคงใช้ช่วงเวลาดีๆเหล่านี้<br/>
        พูดคุยถึงชีวิตของกันและกันอยู่ไหม?
      </Text>
      <div
        style={{
          width: '100%',
          marginTop: 20,
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Text
          className="th-prompt"
          style={{
            textAlign: 'center',
            width: '80%',
            display: 'block',
            marginBottom: 200,
            fontSize: '1.15em'
        }}
          >
          ยังเก็บเรื่องเล่าตลก หรือเรื่องแย่ๆ<br/>
          ในแต่ละวันมาเล่าสู่กันฟัง<br/>
          ให้ครอบครัวรับรู้บ้างหรือเปล่า<br/>
          อาจจะเป็นความฝันเมื่อคืน
        </Text>
      </div>
      <div
        style={{
          width: '100%',
          position: 'relative'
        }}
      >
        <Button
          className="no-button"
          onClick={() => props.setStep(props.step + 1)}
        >
          NOPE !
        </Button>
        <Button
          className="yes-button"
          onClick={() => props.setStep(10)}
        >
          <span>Yes</span>
          <span>:)</span>
        </Button>
      </div>
    </div>
  )
}
