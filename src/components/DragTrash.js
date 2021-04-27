import React, { useState, useEffect } from "react";
import { Typography, Image } from "antd";

import Draggable from 'react-draggable';
 
const { Text } = Typography;

export default function DragTrash(props) {
  // useEffect(() => {
  //   const clear = setTimeout(() => {
  //     props.setStep(props.step + 1)
  //   }, 5000)

  //   return () => clearTimeout(clear)
  // }, [props])
  const [className, setClassName] = useState('fade-enter')
  const [visible, setVisible] = useState({
    sec: true,
    third: true
  })
  const eventLogger = (e: MouseEvent, data: Object, el) => {
    console.log(el, data.node.getBoundingClientRect().top)
    const trash = document.querySelector('#trash')
    const tPosition = trash.getBoundingClientRect()
    const elPosition = data.node.getBoundingClientRect().top
    if (visible[el] && elPosition >= tPosition.top) {
      setVisible({
        ...visible,
        [el]: false
      })
    }
  }

  useEffect(() => {
    if (!visible.sec && !visible.third) {
      props.setStep(props.step + 1)
    }
  }, [visible, props])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Text
        className="first noselect th-chonburi"
        style={{
          zIndex: 10,
          marginTop: 50,
          marginBottom: 10,
          width: "85%",
          display: "block",
          fontSize: '1em',
          fontWeight: 700,
          padding: 20,
          textAlign: 'center',
          background: '#E5E3DC',
          borderRadius: 20
        }}
        >
        คุณหรือคนในครอบครัว<br/> กำลังมีพฤติกรรมเหล่านี้หรือไม่
      </Text>
      {
        visible.sec ? <Draggable
        handle=".sec"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[1, 1]}
        scale={1}
        onStop={(e, data) => eventLogger(e, data, 'sec')}
      >
        <Text
          copyable={false}
          className="sec noselect th-prompt"
          style={{
            zIndex: 9,
            cursor: 'move',
            width: "85%",
            marginBottom: 10,
            display: "block",
            fontSize: '1em',
            fontWeight: 700,
            padding: 15,
            textAlign: 'center',
            background: '#F9F7ED',
            borderRadius: 20,
            fontStyle: 'italic',
            border: '3px solid #475DED'
          }}
          >
          คุณกำลังทำหน้าที่แสดงบทบาทเป็น<br/>ผู้กำกับเส้นทางฝันของผู้อื่น
        </Text>
      </Draggable>
      : <div style={{ height: 85 }} />
      }
      {
        visible.third ? <Draggable
        handle=".third"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[1, 1]}
        scale={1}
        onStop={(e, data) => eventLogger(e, data, 'third')}
      >
        <Text
        className="third th-prompt"
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
          border: '3px solid #F6D648'
        }}
      >
        คุณคิดว่าเวลาที่มีอยู่จำกัดในแต่ละวัน<br/>ควรถูกใช้เพื่อหาเงิน
        </Text>
        </Draggable>
      : <div style={{ height: 85 }} />
      }
      <div className={className} id="trash">
        <Image
          style={{
            zIndex: -1
          }}
          onLoad={() => {
            setClassName('fade-enter-active')
          }}
          preview={false} width="70%" src={require("../assets/bin1-01.png").default}
        />
      </div>
    </div>
  );
}
