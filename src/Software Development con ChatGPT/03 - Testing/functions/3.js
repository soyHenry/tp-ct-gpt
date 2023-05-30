// Para ejecutar los tests que crees con vitest: npm run test-vitest

import React from "react";

const MiComponente = ({ nombre }) => {
  return (
    <div>
      <h1>Hola, {nombre}!</h1>
      <p>Bienvenido a mi componente.</p>
      <button onClick={() => console.log("¡Has hecho clic en el botón!")}>
        Haz clic aquí
      </button>
    </div>
  );
};

module.exports = MiComponente;