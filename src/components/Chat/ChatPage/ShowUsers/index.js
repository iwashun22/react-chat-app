import React from 'react'

import './index.css'

const index = ({ users, removePopUp }) => {
   return (
     <div className="usersBox">
       <h2 className="usersPopUpHeader">Members</h2>
       {users.map((user) => (
         <p key={user.id} className="userList">
           {user.name}
         </p>
       ))}
      <i onClick={removePopUp} class="fas fa-window-close red" id="closePopUpButton"></i>
     </div>
   );
}

export default index
