import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux'
import { store, persistor } from './redux/createStore'
import { PersistGate } from 'redux-persist/integration/react'
import ScrollToTop from './utils/ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <PersistGate persistor={persistor}>
        <App />
        </PersistGate>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
