import React, { useState } from 'react';
import './App.css';
import icon1 from './icon1.png'; // Path to your first icon
import icon2 from './icon2.png'; // Path to your second icon

function Just() {
  const [icon, setIcon] = useState(icon1);

  const changeIcon = () => {
    setIcon((prevIcon) => (prevIcon === icon1 ? icon2 : icon1));
  };

  return (
    <div className="App">
      <div className="icon" onClick={changeIcon} style={{ backgroundImage: `url(${icon})` }}></div>
    </div>
  );
}

export default Just;
