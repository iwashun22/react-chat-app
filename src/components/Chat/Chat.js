import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation, Navigate } from 'react-router-dom'
import queryString from 'query-string';
import io from 'socket.io-client';

import ChatPage from './ChatPage'
import Input from './Input'
import Messages, { scrollDown } from './Messages'

import './Chat.css'

let socket;

const Chat = () => {
   const [name, setName] = useState('');
   const [redirect, setRedirect] = useState(false);
   const [room, setRoom] = useState('');
   const [users, setUsers] = useState([]);
   const messageBox = useRef(null);
   const [messages, setMessages] = useState([]);
   const location = useLocation();
   const ENDPOINT = 'localhost:8282';
   useEffect(() => {
      // console.log(location.search);
      const { name, room } = queryString.parse(location.search);

      socket = io(ENDPOINT);

      // console.log(socket);
      setName(name);
      setRoom(room);

      socket.emit('join', { name, room }, (error) => {
         if(error) {
            if(window.confirm(error)){
               setRedirect(true);
            };
         }
         else {
            console.log(`${name} has join the room ${room}`);
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
         new Promise((fulfill, reject) => {
            if(messages.length >= 10) {
               const [removed, ...rest] = messages;
               setMessages([...rest, message]);
            }
            else {
               setMessages([...messages, message])
            };

            fulfill();
         })
         // scroll down
         .then(() => {
            scrollDown();
         })
      })
   }, [messages]);

   useEffect(() => {
      socket.on('new user', ({ users }) => {
         setUsers([...users]);
      })
      // console.log(users);
   }, [users]);

   const sendMessage = useCallback((e) => {
      e.preventDefault();
      const message = messageBox.current.value;
      if(message) {
         socket.emit('sendMessage', message, (err) => {
            if(err) {
               if(window.confirm(err)) {
                  setRedirect(true);
                  return;
               };
               return;
            }
         })
         messageBox.current.value = '';
      }
   }, [messages]);

   // console.log(message, messages);

   return (
      <>
         {redirect && <Navigate to="/" replace={true}/>}
         <div className="chatContainer">
            <div className="chatInnerContainer">
               <ChatPage room={room} users={users}/>
               <Messages messages={messages} name={name}/>
               <Input messageBox={messageBox} sendMessage={sendMessage}/>
            </div>
         </div>
      </>
   )
}

export default Chat
