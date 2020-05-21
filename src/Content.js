import React from 'react';

import './App.css';
import ContentLeft from "./ContentLeft";
import ContentBody from "./ContentBody";
import ContentRight from "./ContentRight";

function Content() {
  return (
    <div className="Content">
      <ContentLeft />
      <ContentBody />
      <ContentRight />

    </div>
  );
}

export default Content;
