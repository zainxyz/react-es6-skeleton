import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from 'containers/Routes';

const Root = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default Root;
