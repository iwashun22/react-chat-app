import React from 'react'

const index = ({message, setMessage, sendMessage}) => {
   return (
      <form className='chatForm'>
         <input type="text" className="input" placeholder="Type a message..." value={message} onChange={(e) => setMessage(e.target.value)} onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null}/>
         <button className="sendButton">send</button>
      </form>
   )
}

export default index
