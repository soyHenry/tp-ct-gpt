//1-1-1
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
// return passwordRegex.test(contraseña);

// 1-1-2
// const phoneRegex = /^\+\d{2}-\d{10}$/;
// return phoneRegex.test(telefono);

// 1-1-3

// const dominio = correo.match(/@([\w.-]+)$/)?.[1];
// return dominio || undefined;

// 1-2
// import './RandomColor.css';
// import { useState } from "react"

// function RandomColor() {

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

// export default RandomColor;
// .App {
//     width: 100vw;
//     height: 100vh;
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//   }

//   .box{
//     background-color: #ffff00;
//     width: 70vw;
//     height: 70vh;
//     border-radius: 1rem;
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     align-items: center;
//   }

//   .title{
//     color: #242424;
//     z-index: 9999;
//   }

//   .btn{
//     width: 15vw;
//     height: 8vh;
//     margin-top: 15vh;
//     background-color: #ffffff;
//     border-radius: 0.3rem;
//     border-color: #272727;
//     cursor: pointer;
//     font-size: 1.5rem;
//   }
