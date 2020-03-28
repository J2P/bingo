import React, { useState, useEffect } from 'react';
import Bingo from '../components/Bingo';

const RoomList = ({ socket }) => {
  const [room, setRoom] = useState([]);
  const [join, setJoin] = useState(false);

  useEffect(() => {
    socket.on('join room', (room) => {
      setRoom(room);
    });
  }, []);

  const handleJoinRoom = () => {
    socket.emit('join room');
    setTimeout(() => setJoin(true), 1000);
  };

  return (
    join 
      ? <Bingo socket={socket} room={room} id={socket.id} />
      : <button onClick={handleJoinRoom}>방 입장</button>
  );
};

export default RoomList;