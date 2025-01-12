import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App';

const rootElement = document.querySelector('#root');
if(!rootElement) throw new Error('Cannot find root!')
  
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);