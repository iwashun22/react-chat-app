import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
   const [name, setName] = useState('');
   const [room, setRoom] = useState('')

   return (
     <>
       <div className="joinOuterContainer">
         <div className="joinInnerContainer center">
           <h2 className="header">join chat room</h2>
           <div>
             <input
               type="text"
               name="userName"
               placeholder="username"
               value={name}
               onChange={(e) => {
                  setName(e.target.value);
               }}
             />
           </div>
           <div>
             <input
               type="text"
               name="roomName"
               placeholder="room name"
               value={room}
               onChange={(e) => {
                  setRoom(e.target.value);
               }}
             />
           </div>
           <Link onClick={
              (e) => (!name || !room) ? e.preventDefault() : null
           } to={`/chat?name=${name}&room=${room}`}>
               <button className="btn" type="submit" style={{marginTop: '15px'}}>sign in</button>
           </Link>
         </div>
       </div>
     </>
   );
}

export default Join
