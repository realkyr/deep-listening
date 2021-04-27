import React, { useState, useEffect }  from 'react'
import { Typography } from 'antd'
import bodymovin from 'lottie-web'
const { Title, Text } = Typography

export default function Final (props) {
  const [className, setClassName] = useState('fade-enter')
  useEffect(() => {
    const anim = bodymovin.loadAnimation({
      container: document.getElementById('anim'), // Required
      animationData: require('../assets/animations/p13.json'), // Required
      renderer: 'canvas', // Required
      loop: true, // Optional
      autoplay: true, // Optional
      name: "p13", // Name for future reference. Optional.
    })
    anim.addEventListener('DOMLoaded', () => {
      console.log('data ready')
      setClassName('fade-enter-active')
    })
  }, [])
  return (
    <div style={{
      textAlign: 'center'
    }} className="th-prompt">
      
        {
          props.surveyAns === 1
            ? (
              <Text style={{
                fontStyle: 'italic',
                fontSize: '1.15em'
              }}>
                มันเป็นเรื่องธรรมชาติ <br/>
                ที่เราต้องการให้คนอื่นมารับฟังเราก่อนเสมอ<br/>
                แต่มันจะเป็นไปไม่ได้เลยถ้าหากเราสนใจ<br/>
                แต่ความต้องการของตนเอง<br/>
                ถ้าอยากให้คนอื่นฟังเรามากขึ้น<br/>
                เราก็ควรที่จะฟังคนอื่นให้มากขึ้นเช่นกัน
              </Text>
            )
            : (
              <Text style={{
                fontStyle: 'italic',
                fontSize: '1.15em'
              }}>
                มันคงจะดีกว่าใช่ไหม<br/>
                ถ้าคุณได้รับบทเป็นผู้ฟังที่ดีให้กับใครสักคน<br/>
                ในโลกที่มีแต่คนที่ต้องการจะพูด<br/>
                แต่คนฟังกลับน้อยลง
              </Text>
            )
        }
      <Title style={{
          fontSize: '1.15em'
        }} level={5}>
        ยิ่งเรามีความสามารถในการฟังมากเท่าไหร่<br/>
        เรายิ่งดูแลความสัมพันธ์ที่มีให้ดีขึ้นได้
      </Title>
      <div
        className={className}
        id="anim"
        style={{
          height: 200,
          width: 200,
          margin: '-30px auto'
        }}
      />
      <Title style={{
        fontSize: '1.15em'
      }} level={5}>
        #TheDeepListening
      </Title>
    </div>
  )
}
