import React from 'react';
import reactDom from 'react-dom';

// let clock = document.getElementById("clock");

// setInterval(function(){
//   clock.innerHTML = new Date().toLocaleTimeString();
// });

function clock(){
  const element = (
    <div>
      <h1>Hello, SEONYOUNG</h1>
      <h2>지금은 {new Date().toLocaleTimeString()}입니다.</h2>
    </div>
  )
  reactDom.render(element, document.getElementById("root"));
}

setInterval(clock, 1000);