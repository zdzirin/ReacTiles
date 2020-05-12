import React, { useState } from "react";
import "./Letter.css";

export default function Letter(props) {
  const [color, setColor] = useState("white");

  let getRandomColor = () => {
    let h = Math.floor(Math.random() * 360);
    let s = Math.floor(Math.random() * 40) + 20;
    let l = Math.floor(Math.random() * 30) + 30;
    return `hsl(${h},${s}%,${l}%)`;
  };

  return (
    <div
      className="Letter"
      spot={props.spot}
      onClick={() => setColor(getRandomColor())}
      style={{ color: color }}
    >
      {props.text}
    </div>
  );
}
