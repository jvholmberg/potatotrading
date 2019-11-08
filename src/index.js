import './reset.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

import configureStore from './store';
import Routes from './routes';

import * as serviceWorker from './serviceWorker';

const store = configureStore();
ReactDOM.render((
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  </ThemeProvider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
