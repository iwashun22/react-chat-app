import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import queryString from 'query-string';
import io from 'socket.io-client';

const Chat = () => {
   const location = useLocation();
   useEffect(() => {
      const data = queryString.parse(location.search);
      console.log(data);
   })
   return (
      <h1>Chat</h1>
   )
}

export default Chat
