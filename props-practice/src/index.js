import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import App from "./App";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

// Usando o "createRoot" que substituiu o "render" no React 18 para fazer o render do App