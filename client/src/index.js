import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { StrictMode } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { createRoot } from "react-dom/client";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
