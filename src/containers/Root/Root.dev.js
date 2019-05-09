import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import DevTools from '../../tools/DevTools';
import App from '../App';

const Root = (props) => (
  <Provider store={props.store}>
    <Router>
      <App />
      <DevTools />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;