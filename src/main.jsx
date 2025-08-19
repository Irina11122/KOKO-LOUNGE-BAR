import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './pages/Main';
import './index.css';
import { CartProvider } from 'react-use-cart';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </CartProvider>,
);
