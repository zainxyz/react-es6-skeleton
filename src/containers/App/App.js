import React from 'react';
import bindClassnames from 'classnames/bind';

import logo from 'static/images/logo.svg';

import styles from './App.scss';
// Bind to classnames
const classnames = bindClassnames.bind(styles);

const App = () => (
  <div className={classnames('App')}>
    <header className={classnames('App-header')}>
      <img src={logo} className={classnames('App-logo')} alt="logo" />
      <h1 className={classnames('App-title')}>Welcome to React</h1>
    </header>
    <p className={classnames('App-intro')}>
      To get started, edit <code>src/containers/App/App.js</code> and save to reload.
    </p>
  </div>
);

export default App;
