import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import './i18n';
import { LanguageContextProvider } from './context/LanguageContext';
import {StorageProvider } from './context/SearchContext'
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-bootstrap';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ToastContainer/>
      <LanguageContextProvider>
        <StorageProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </StorageProvider>
      </LanguageContextProvider>
    </HelmetProvider>
  </React.StrictMode>
);


reportWebVitals();
