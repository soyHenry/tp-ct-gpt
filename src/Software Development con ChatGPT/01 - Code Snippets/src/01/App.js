// import './App.css';
// import { useState } from "react"

// function App() {

//   const [bgColor, setBgColor] = useState("");

//   function generarColorHexadecimal() {
//     const caracteresHex = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += caracteresHex[Math.floor(Math.random() * 16)];
//     } 
//     setBgColor(color);
//   }
  

//   return (
//     <div className="App" style={{ backgroundColor: bgColor }}>

//       <div className="box">
        
//       <h1>Henry's | Change Color App</h1>

//           <button className="btn" onClick={generarColorHexadecimal}>CHANGE THE COLOR</button>

//       </div>

//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';

const ChangeColorApp = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffff00');

  const changeColor = () => {
    const randomColor = getRandomColor();
    setBackgroundColor(randomColor);
  };

  const getRandomColor = () => {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#00ffff'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'background-color 0.5s',
      }}
    >
      <div
        style={{
          backgroundColor: '#ffff00',
          borderRadius: '10px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2 style={{ marginBottom: '20px' }}>Henry's | Change Color App</h2>
        <button
          style={{
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
          onClick={changeColor}
        >
          CHANGE THE COLOR
        </button>
      </div>
    </div>
  );
};

export default ChangeColorApp;
