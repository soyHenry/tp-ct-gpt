import React from 'react';
import ReactDOM from 'react-dom/client';
import Component from './04 - Component';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <Component nombre={'Henry'} />
   </React.StrictMode>
);
