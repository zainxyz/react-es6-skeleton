import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// Import the bootstrap dependency
import 'bootstrap/dist/css/bootstrap.css';

import App from 'components/App';

const Root = ({ store, }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
