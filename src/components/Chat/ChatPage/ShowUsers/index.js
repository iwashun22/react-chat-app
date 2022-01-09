import React from 'react'

import './index.css'

const index = ({ users, removePopUp }) => {
  return (
    <div className="usersBox">
      <div className="innerUsersBox">
        <h2 className="usersPopUpHeader">Members</h2>
        <div className="usersListScrollArea">
          {users.map((user) => (
            <p key={user.id} className="userList">
              {user.name}
            </p>
          ))}
        </div>
        <i
          onClick={removePopUp}
          className="fas fa-window-close red"
          id="closePopUpButton"
        ></i>
      </div>
    </div>
  );
}

export default index
