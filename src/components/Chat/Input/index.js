import React from 'react'

import './index.css'

const index = ({message, setMessage, sendMessage}) => {
   return (
      <form className='chatForm' onSubmit={(e) => message? sendMessage(e) : null}>
         <input type="text" className="input" placeholder="Type a message..." value={message} onChange={(e) => setMessage(e.target.value)} onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null}/>
         <button className="sendButton" type="submit">send</button>
      </form>
   )
}

export default index
