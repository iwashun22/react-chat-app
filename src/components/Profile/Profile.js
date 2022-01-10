import React from 'react'

import './Profile.css';

const Profile = () => {
   return (
     <div className="profileHeader">
       <a href="https://github.com/iwashun22/" id="githubLink">
         <i className="fab fa-github githubIcon navIcon"></i>
       </a>
      <p>link to my github profile</p>
     </div>
   );
}

export default Profile
