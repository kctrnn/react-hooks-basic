import React, { useState } from 'react';
import './ColorBox.scss';

function getRandomColor() {
  const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
  const randomIndex = Math.trunc(Math.random() * 5); // 0 -> 4
  return COLOR_LIST[randomIndex];
}

function ColorBox() {
  // init state callback
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem('color-box') || 'deeppink';
    return initColor;
  });

  function handleBoxClick() {
    // get random color -> set color
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem('color-box', newColor);
  }

  return (
    <div
      className='color-box'
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    ></div>
  );
}

export default ColorBox;
