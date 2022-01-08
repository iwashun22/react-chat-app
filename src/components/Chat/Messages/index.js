import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message';
import './index.css'

const index = ({ messages, name }) => {
   return (
      <ScrollToBottom>
         <div className="messageArea">
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
      </ScrollToBottom>
   )
}

export default index
