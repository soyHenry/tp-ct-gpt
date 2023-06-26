import { useState } from 'react';

const Component = ({ nombre }) => {
   const [count, setCount] = useState(0);

   return (
      <div>
         <h1>Hola, {nombre}!</h1>
         <p>Bienvenido a mi componente.</p>
         <h3>{count}</h3>
         <button
            onClick={() => {
               setCount(count + 1);
            }}
         >
            Haz click aquí
         </button>
      </div>
   );
};

export default Component;
