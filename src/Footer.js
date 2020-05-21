import React from 'react';

import './App.css';

function Footer(props) {
  return (
    <div className="Footer">
      {props.menu.map(el=><div className="FooterMenuItem">{el}</div>)}
    </div>
  );
}

export default Footer;
