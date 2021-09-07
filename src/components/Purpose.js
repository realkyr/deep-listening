import React, { useState } from "react";
import { Typography, Image } from "antd";

const { Text } = Typography;

export default function Purpose(props) {
  const [className, setClassName] = useState('fade-enter')
  return (
    <>
      <div style={{ paddingBottom: '10vh' }}>
        <Text
          className="th-prompt"
          style={{
            textAlign: "center",
            width: "100%",
            display: "block",
            fontSize: '1.05em',
            color: "#DB644D",
          }}
        >
          ชิ้นงานนี้เป็นส่วนหนึ่งของวิชา <br></br>Social Communication Innovation Thesis <br></br>
          เอกการออกแบบสื่อปฏิสัมพันธ์และมัลติมีเดีย<br></br> วิทยาลัยนวัตกรรมสื่อสารสังคม
          <br></br>มหาวิทยาลัยศรีนครินทรวิโรฒ ประสานมิตร
        </Text>
        <Text
          className="copperplate"
          style={{
            textAlign: "center",
            width: "100%",
            display: "block",
            fontSize: 18,
            fontWeight: 700,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          ‘The deep listening’
        </Text>
        <Text
          className="th-prompt"
          style={{
            textAlign: "center",
            width: "100%",
            display: "block",
            fontSize: '1.05em',
            marginBottom: 20,
          }}
        >
          ถูกสร้างขึ้นมาเพื่อให้ทุกคนตระหนักถึง<br></br>
          ความสำคัญของการรับฟังที่ดีในครอบครัว<br></br>
          หลายครั้งที่เรามักละเลยการรับฟังความรู้สึก<br></br>ของคนที่เรารัก
        </Text>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            onClick={() => props.setStep(props.step + 1)}
            style={{
              width: 80,
              height: 80,
              cursor: "pointer",
              position: 'relative'
            }}
          >
            <img
              alt="btn"
              style={{
                position: 'absolute',
                width: '100%',
                height: 'auto',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
              src={require('../assets/button1-01.png').default}
            />
          </div>
        </div>
        <div className={className} style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          left: 0,
          width: '100%',
          marginTop: '5vh'
        }}>
          <div className="logo-wrapper">
            <Image
              onLoad={() => {
                setClassName('fade-enter-active')
              }}
              style={{
                maxHeight: 50,
                width: 'auto'
              }}
              preview={false}
              src={require("../assets/logo/swu-01.png").default}
            />
            <Image
              onLoad={() => {
                setClassName('fade-enter-active')
              }}
              style={{
                maxHeight: 80,
                width: 'auto'
              }}
              preview={false}
              src={require("../assets/logo/doet-01.png").default}
            />
          </div>
          <div className="logo-wrapper">
            <Image
              onLoad={() => {
                setClassName('fade-enter-active')
              }}
              style={{
                maxHeight: 50,
                width: 'auto'
              }}
              preview={false}
              src={require("../assets/logo/multi-01.png").default}
            />
            <Image
              onLoad={() => {
                setClassName('fade-enter-active')
              }}
              style={{
                maxHeight: 50,
                width: 'auto'
              }}
              preview={false}
              src={require("../assets/logo/colab-02.png").default}
            />
            <Image
              onLoad={() => {
                setClassName('fade-enter-active')
              }}
              style={{
                maxHeight: 50,
                width: 'auto'
              }}
              preview={false}
              src={require("../assets/logo/iamd-01.png").default}
            />
          </div>
        </div>
      </div>
    </>
  );
}
