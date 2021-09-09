import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Room } from './components/Room';
import { RoomItem } from './types';
import { useEffect, useState } from 'react';
import { fetchRooms } from './api/fetchRooms';


function App() {
  const [rooms, setRooms] = useState([]);
    
  useEffect(() => {
    getRooms();
  }, []);

  const getRooms = () => {
    fetchRooms()
      .then((result) => {
        setRooms(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <h1>Rooms</h1>
        { rooms.map((room: RoomItem) => {
          return <Room room={room} key={room.id}></Room>
        })}
      </div>
    </div>
  );
}

export default App;
