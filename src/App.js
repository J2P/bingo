import React from 'react';
import useSocket from 'use-socket.io-client';
import RoomList from './components/RoomList';
import './App.css';

function App() {
  const [socket] = useSocket(`http://${window.location.hostname}:4000`);
  socket.connect();

  return (
    <RoomList socket={socket} />
  );
}

export default App;
