import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom'
import queryString from 'query-string';
import io from 'socket.io-client';

import ChatPage from './ChatPage'
import Input from './Input'
import Messages from './Messages'

import './Chat.css'

let socket;

const Chat = () => {
   const [name, setName] = useState('');
   const [room, setRoom] = useState('');
   const [message, setMessage] = useState('');
   const [messages, setMessages] = useState([]);
   const location = useLocation();
   const ENDPOINT = 'localhost:8282';
   useEffect(() => {
      // console.log(location.search);
      const { name, room } = queryString.parse(location.search);

      socket = io(ENDPOINT);

      console.log(`${name} has join the room ${room}`);
      // console.log(socket);
      setName(name);
      setRoom(room);

      socket.emit('join', { name, room }, (error) => {
         if(error) {
            alert(error);
         }
         else {
            console.log('successfully join');
         }
      });

      return () => {
         socket.emit('disconnect');
         socket.off();
      }
   }, [ENDPOINT, location.search])

   useEffect(() => {
      socket.on('message', (message) => {
         if(messages.length >= 10) {
            const [removed, ...rest] = messages;
            setMessages([...rest, message]);
         }
         else setMessages([...messages, message]);
      })
   }, [messages]);

   const sendMessage = useCallback((e) => {
      e.preventDefault();
      if(message) {
         socket.emit('sendMessage', message, () => {
            setMessage('');
         })
      }
   });

   // console.log(message, messages);

   return (
      <>
         <div className="chatContainer">
            <div className="chatInnerContainer">
               <ChatPage room={room}/>
               <Messages messages={messages} name={name}/>
               <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
         </div>
      </>
   )
}

export default Chat
