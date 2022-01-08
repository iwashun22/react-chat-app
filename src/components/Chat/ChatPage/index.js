import React from 'react'

import './index.css'

const index = ({room}) => {
   return (
     <div className="infoBar">
       <i className="fas fa-users green infoItem navItem"></i>
       <h2 className="infoItem">{room}</h2>
       <a href="/" className="infoItem navItem">
         <i className="fas fa-sign-out-alt red"></i>
       </a>
     </div>
   );
}

export default index
