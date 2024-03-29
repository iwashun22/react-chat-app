import React from 'react'
import ReactEmoji from 'react-emoji'

import './index.css'

const index = ({ message, name}) => {
   let isSentByCurrentUser = false;
   const trimmedName = name.trim().toLowerCase();

   if(message.user === trimmedName){
      isSentByCurrentUser = true;
   }

   return isSentByCurrentUser ? (
     <div className="messageContainer right">
       <div className="messageBox">
         <p className="messageText">{ReactEmoji.emojify(message.text)}</p>
       </div>
       <p className="sentText">you</p>
     </div>
   ) : (
     <div className="messageContainer left">
       <div className="messageBox">
         <p className="messageText">{ReactEmoji.emojify(message.text)}</p>
       </div>
       <p className="sentText">{message.user}</p>
     </div>
   );
}

export default index
