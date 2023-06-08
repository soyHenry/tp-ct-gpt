import React from 'react';
import { useParams } from 'react-router';

const DetallesProducto = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <h1>Detalles del producto {id}</h1>
      <p>Aquí puedes mostrar los detalles del producto con ID {id}.</p>
    </div>
  );
};

export default DetallesProducto;
