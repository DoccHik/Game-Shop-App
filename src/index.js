import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';


import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom'
import { store } from './redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Routes>
        {/* <Route path='/home' element={<HomePage />} /> */}
      </Routes>
    </BrowserRouter>
  </Provider>
);
