import socketClient from 'socket.io-client';
import React from 'react';
import Cell from './Cell';
import Line from './Line';

const socket = socketClient(`http://${window.location.hostname}:4000`, );

class Bingo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: '', board: [], lines: [], roomName: ''};
  }

  componentDidMount() {
    socket.on('init', data => {
      const {id, board, color, roomName} = data;
      this.setState({id, board, color, roomName});
    });
    socket.on('select:number', data => {
      const { users } = data;
      const user = users[this.state.id];
      const board = user['board'];
      const lines = user['lines'];
      this.setState({board, lines});
    });
  }

  handleClick = cell => {
    const { id , roomName } = this.state;
    const number = cell.props.value;

    socket.emit('send:number', {user: id, number, roomName});
  }

  render() {
    const { board, lines, color, roomName } = this.state;

    var cellList = board.map(cell => (
      <Cell value={cell.value} key={cell.id} selected={cell.selected} onClick={this.handleClick} />
    ));

    var lineList = lines.map((line, index) => (
      <Line position={line} key={index} />
    ));

    return (
      <div className={color}>
        <h1>BINGO</h1>
        <div className="board">{lines.length} Bingo : {roomName}</div>
        <div className="bingo">
          {lineList}
          {cellList}
        </div>
      </div>
    );
  }
}

export default Bingo;
