import React, { useEffect } from "react";

export default function Title(props) {
  useEffect(() => {
    const clear = setTimeout(() => {
      props.setStep(1)
    }, 5000)

    return () => clearTimeout(clear)
  }, [props])
  
  return (
    <>
      <div
        className="background"
        style={{
          backgroundImage: `url('${
            require("../assets/final thesis-01.jpg").default
          }')`,
          width: "100%",
          height: "100%",
        }}
      ></div>
    </>
  );
}
