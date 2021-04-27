import React from "react";
import { Typography } from "antd";
const { Text } = Typography;

export default function SurveyFirst(props) {
  return (
    <>
      <div>
        <Text
          className="th-chonburi"
          style={{
            width: "100%",
            display: "block",
            textAlign: 'center',
            fontSize: '1.5em',
            fontWeight: 700
          }}
        >
          การรับฟังเสียงของ<br/>คนในครอบครัว
        </Text>
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
          จึงเป็นสิ่งที่ทุกคนควรให้ความสำคัญ<br/> 
          ไม่ว่าคุณอยู่ในบริบทใด ระหว่างพ่อแม่กับลูก<br/>
          หรือแม้กระทั่งระหว่างสามี ภรรยา<br/>
          เป็นการรับฟังที่ประกอบด้วย ความเห็นอกเห็นใจ<br/>
          ไม่เอาตนเองเป็นตัวกำหนดหรือเป็นผู้ตัดสิน
        </Text>
        <Text
          className="blink_me th-prompt"
          style={{
            textAlign: "center",
            width: "100%",
            marginTop: 80,
            display: "block",
            fontSize: 20,
            color: "#DD644C",
            fontStyle: 'italic'
          }}
          onClick={() => props.setStep(10)}
        >
          ลองมาสำรวจตัวเองกัน
        </Text>
      </div>
    </>
  );
}
