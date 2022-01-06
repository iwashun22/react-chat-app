import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = () => {
   const [name, setName] = useState('');
   const [room, setRoom] = useState('');
   const location = useLocation();
   const ENDPOINT = 'localhost:8282';
   useEffect(() => {
      // console.log(location.search);
      const { name, room } = queryString.parse(location.search);

      socket = io(ENDPOINT);

      console.log(name, room);
      console.log(socket);
      setName(name);
      setRoom(room);

      socket.emit('join', { name, room }, () => {

      });

      return () => {
         socket.emit('disconnect');
         socket.off();
      }
   }, [ENDPOINT, location.search])
   return (
      <h1>Chat</h1>
   )
}

export default Chat
