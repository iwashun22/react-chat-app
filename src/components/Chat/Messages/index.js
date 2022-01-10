import React from 'react';

import Message from './Message';
import './index.css'

export function scrollDown() {
   const messageArea = document.getElementById("messageArea");
   const bottom = messageArea.scrollHeight - messageArea.clientHeight;
   messageArea.scrollTo({ top: bottom, left: 0, behavior: "smooth" });
}

const index = ({ messages, name }) => {
   return (
      <div className="messageArea" id="messageArea">
         {
            messages.map((msg, i) => {
               return (
                  <div key={i}>
                     <Message message={msg} name={name}/>
                  </div>
               );
            })
         }
      </div>
   )
}

export default index
