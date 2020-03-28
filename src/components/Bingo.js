import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import Line from './Line';

const Bingo = ({ socket, room, id }) => {
  const { name, users } = room;
  const user = users.filter(user => user.id === id)[0];
  
  const [color, setColor] = useState('');
  const [board, setBoard] = useState([]);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    setColor(user.color);
    setBoard(user.board);
    setLines(user.lines);

    socket.on('select:number', users => {
      const user = users.filter(user => user.id === id)[0];
      setColor(user.color);
      setBoard(user.board);
      setLines(user.lines);
    });
  }, []);

  const handleSend = number => {
    socket.emit('send:number', id, number, name);
  };

  return (
    <div className={color}>
      <h1>BINGO</h1>
      <div className="board">{lines.length} Bingo : {name}</div>
      <div className="bingo">
        {lines.map((line, index) => <Line key={index} position={line} />)}
        {board.map(({ id, value, selected }) => (
          <Cell key={id} value={value} selected={selected} onClick={() => handleSend(value)} />
        ))}
      </div>
    </div>
  );
}

export default Bingo;
