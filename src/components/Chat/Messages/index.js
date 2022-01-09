import React from 'react';

import Message from './Message';
import './index.css'

const index = ({ messages, name }) => {
   return (
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
   )
}

export default index
