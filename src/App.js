import React from "react";
import "./App.css";
import TileBoard from "./Components/TileBoard";
import Letter from "./Components/Letter";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rows: 0, cols: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    window.addEventListener("scroll", () => this.addRows());
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
    window.removeEventListener("scroll", () => this.addRows());
  }

  updateWindowDimensions() {
    this.setState({
      rows: Math.floor(window.innerHeight / 77),
      cols: Math.floor(window.innerWidth / 77),
    });
  }

  addRows() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    let rows = this.state.rows + 10;
    this.setState({
      rows: rows,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="Row">
          <Letter spot="1" text="T" />
          <Letter spot="2" text="I" />
          <Letter spot="3" text="L" />
          <Letter spot="4" text="E" />
          <Letter spot="5" text="S" />
        </div>
        {/*<p style={{ marginTop: "0px" }}>Rows: {this.state.rows} Cols: {this.state.cols}</p>*/}
        <TileBoard rows={this.state.rows} cols={this.state.cols} />
      </div>
    );
  }
}
