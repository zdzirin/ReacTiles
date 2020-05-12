import React from "react";
import "./App.css";
import TileBoard from "./Components/TileBoard";

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
      rows: Math.floor(window.innerHeight / 80),
      cols: Math.floor(window.innerWidth / 77),
    });
  }

  makeTiles() {
    let tileContainer = document.getElementById("TileContainer");
    for (let r = 0; r < this.state.rows; r++) {
      let tmp = document.createElement("div");
      tmp.className = "Row";
      for (let c = 0; c < this.state.cols; c++) {
        let tile = document.createElement("div");
        tile.className = "Tile";
        tmp.appendChild(tile);
      }
      tileContainer.appendChild(tmp);
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Row">
          <div className="Letter" spot="1">
            T
          </div>
          <div className="Letter" spot="2">
            I
          </div>
          <div className="Letter" spot="3">
            L
          </div>
          <div className="Letter" spot="4">
            E
          </div>
          <div className="Letter" spot="5">
            S
          </div>
        </div>
        {/*<p style={{ marginTop: "0px" }}>Rows: {this.state.rows} Cols: {this.state.cols}</p>*/}
        <TileBoard rows={this.state.rows} cols={this.state.cols} />
      </div>
    );
  }
}
