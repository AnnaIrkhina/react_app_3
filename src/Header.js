import React from 'react';

import './App.css';

function Header(props) {
  const  onHeaderMenuClick = (element)=>{
      console.log(element);
      props.header(element);
      console.log('header');
  }
  return (
    <div className="Header">
        <ul>

            {props.menu.map(el=><li className="TopMenuItem"><a href="#" onClick = { ()=> onHeaderMenuClick(el) }>{el}</a></li>)}
        </ul>

    </div>
  );
}

export default Header;
