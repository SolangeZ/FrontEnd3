import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DarkContextProvider from './Context/DarkContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <DarkContextProvider>
          <App/>
      </DarkContextProvider>
    </React.StrictMode>
);


