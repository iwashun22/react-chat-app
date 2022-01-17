import React from 'react'

import './index.css'

const index = ({messageBox, sendMessage}) => {
   return (
      <form className='chatForm' onSubmit={(e) => messageBox.current.value? sendMessage(e) : null}>
         <input type="text" className="input" placeholder="Type a message..." ref={messageBox} onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null}/>
         <button className="sendButton" type="submit">send</button>
      </form>
   )
}

export default index
