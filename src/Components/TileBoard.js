import React, { useState, useEffect } from "react";
import "./TileBoard.css";

function Tile(props) {
  const [color, setColor] = useState("white");
  let shadow = "lightgrey";

  let getRandomColor = () => {
    let h = Math.floor(Math.random() * 360);
    let s = Math.floor(Math.random() * 40) + 20;
    let l = Math.floor(Math.random() * 30) + 30;
    return `hsl(${h},${s}%,${l}%)`;
  };

  return (
    <div
      className="Tile"
      onClick={() => {
        let newColor = getRandomColor();
        setColor(newColor);
        shadow = newColor;
      }}
      style={{ backgroundColor: color, color: shadow }}
    ></div>
  );
}

export default function TileBoard(props) {
  let makeTiles = () => {
    let row = [];
    for (let c = 0; c < props.cols; c++) {
      row.push(<Tile />);
    }
    return row;
  };

  let makeRows = (rows) => {
    let board = [];
    for (let r = 0; r < rows; r++) {
      board.push(<div className="Row">{makeTiles()}</div>);
    }
    return board;
  };

  return (
    <div className="Tiles" id="TilesContainer">
      {makeRows(props.rows)}
    </div>
  );
}
