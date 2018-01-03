import socketClient from "socket.io-client";
import React from "react";
import Cell from "./Cell";
import Line from "./Line";

const socket = socketClient("http://localhost:4000");

class Bingo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "BINGO",
      color: "",
      board: [],
      lines: []
    };
  }

  componentDidMount() {
    socket.emit("join");
    socket.on("init", data => this.setInitial(data));
    socket.on("select:number", data => this.selectNumber(data));
  }

  handleClick(cell) {
    socket.emit("send:number", {
      user: this.user,
      number: cell.props.value
    });
  }

  setInitial(data) {
    this.setState({
      id: data.id,
      board: data.board,
      color: data.color
    });
  }

  selectNumber(data) {
    this.setState({
      board: data.users[this.state.id]["board"],
      lines: data.users[this.state.id]["lines"]
    });
  }

  render() {
    var cells = this.state.board.map(cell => (
      <Cell
        value={cell.value}
        key={cell.id}
        selected={cell.selected}
        onClick={this.handleClick.bind(this)}
      />
    ));

    var lines = this.state.lines.map(function(line, index) {
      return <Line position={line} key={index} />;
    });

    return (
      <div className={this.state.color}>
        <h1>{this.state.title}</h1>
        <div className="bingo">
          {lines}
          {cells}
        </div>
      </div>
    );
  }
}

export default Bingo;
