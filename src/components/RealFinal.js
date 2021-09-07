import React from "react";
import { Typography } from "antd";
const { Title, Text } = Typography;

export default function RealFinal(props) {
  return (
    <div
      style={{
        textAlign: "center",
        display: 'flex',
        flexDirection: 'column'
      }}
      className="th-prompt"
    >
      <Text
        style={{
          fontSize: "1.05em",
        }}
      >
        คำพูดของใครสักคนจะมีค่า <br />
        ก็ต่อเมื่อมีคนรับฟัง
      </Text>
      <Text
        style={{
          fontSize: "1.05em",
          marginTop: 20
        }}
      >
        เพราะท้ายที่สุดแล้ว ช่วงเวลาที่ยากที่สุดของชีวิต
        <br />
        เราทุกคนอาจไม่ได้ต้องการอะไรมากไปกว่า
        <br />
        ใครสักคนที่จะคอยรับฟังเราอย่างเข้าใจจริงๆ
      </Text>
      <Title
        style={{
          fontSize: "1.05em",
        }}
        level={5}
      >
        #TheDeepListening
      </Title>
      <Text
        style={{
          fontSize: "1.05em",
        }}
      >
        หรือการรับฟังอย่างลึกซึ้ง<br/>
        จึงไม่ได้เจาะจงว่าต้องเกิดขึ้นจิตแพทย์<br/>
        หรือนักจิตวิทยาเท่านั้น <br/>
        แต่เป็นเรื่องพื้นฐานของชีวิตทุกคนมากกว่า
      </Text>
      <Text style={{
        fontSize: "1.05em",
        marginTop: 50
      }}>
        ขอบคุณสำหรับการรับฟัง
      </Text>
    </div>
  );
}
