import React from 'react';

import './App.css';

function Footer(props) {
  return (
    <div className="Footer">
      {props.menu.map(el=><div className="FooterMenuItem"><a href="#">{el}</a></div>)}
    </div>
  );
}

export default Footer;
