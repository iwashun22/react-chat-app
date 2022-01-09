import React, { useState, useCallback } from 'react'
import ShowUsers from './ShowUsers'

import './index.css'

const useIndex = ({room, users}) => {
   const [showUsers, setShowUsers] = useState(false);
   const removePopUp = useCallback(() => {
     setShowUsers(false);
   })
   return (
     <div className="infoBar">
       <i onClick={() => setShowUsers(true)} className="fas fa-users green infoItem navItem"></i>
       <h2 className="infoItem">{room}</h2>
       <a href="/" className="infoItem navItem">
         <i className="fas fa-sign-out-alt red"></i>
       </a>
       { showUsers && <ShowUsers users={users} removePopUp={removePopUp}/> }
     </div>
   );
}

export default useIndex
