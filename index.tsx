
import React from 'react';
import ReactDOM from 'react-dom/client';
// FIX: Changed import to specify .tsx extension. The main fix is providing a valid App.tsx module.
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);