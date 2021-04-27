import React from 'react'
import { Typography, Input } from 'antd'
import { PlayCircleFilled } from '@ant-design/icons'
const { Text } = Typography
const { TextArea } = Input

export default function Answer(props) {
  return (
    <>
      <div style={{
        background: '#F9F7ED',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 100
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
          เคยมีสถานการณ์เช่นนี้เกิดขึ้น<br/>กับคุณหรือคนในครอบครัวหรือไม่ อย่างไร
        </Text>
        <TextArea
          maxLength={200}
          style={{
            height: 150,
            marginTop: 20
          }}
          onChange={(e) => props.setAnswer(e.target.value)}
          placeholder="พิมพ์คำตอบของคุณที่นี้"
          className="answer th-prompt"
          onPressEnter={() => alert('enter')}
        />
        {
          props.answer ? <Text
            onClick={() => props.setStep(props.step + 1)}
            className="th-prompt"
            style={{
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
    </>
  )
}
