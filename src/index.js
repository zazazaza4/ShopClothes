import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.jsx';
//react-router-dom
import {
  BrowserRouter as Router,
} from "react-router-dom";
//react-redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
