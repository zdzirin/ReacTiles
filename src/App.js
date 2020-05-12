import React from "react";
import logo from "./logo.svg";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rows: 0, cols: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      rows: Math.floor(window.innerHeight / 100),
      cols: Math.floor(window.innerWidth / 100),
    });
  }

  makeTiles() {
    let tileContainer = document.getElementById("TileContainer");
    for (let i = 0; i < this.state.cols * this.state.rows; i++) {
      let tmp = document.createElement("div");
      tmp.className = "Tile";
      tileContainer.appendChild(tmp);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <p>
          Rows: {this.state.rows} Cols: {this.state.cols}
        </p>
        <div className="Tiles" id="TileContainer">
          {this.makeTiles()}
        </div>
      </div>
    );
  }
}
