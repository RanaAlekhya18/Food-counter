import React from 'react';
import ReactDOM from 'react-dom/client';
import "./counter.css"
import Counterapplication from './Counterapplication';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counterapplication/>
  </React.StrictMode>
);
