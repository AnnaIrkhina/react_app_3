import React from 'react';

import './App.css';

function Header(props) {
  return (
    <div className="Header">

        <img src="./logo192.png" alt="logo" width="100" height="100"/>
        {props.menu.map(el=><div className="TopMenuItem">{el}</div>)}


    </div>
  );
}

export default Header;
