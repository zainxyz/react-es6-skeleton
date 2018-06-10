import React from 'react';
import ReactDOM from 'react-dom';

// Import Vendors Styles
import 'styles/vendors/_vendors.scss';
// Import Global Styles
import 'styles/globals/_globals.scss';
// Import Bootstrap Reboot CSS Styles
import 'bootstrap/dist/css/bootstrap.min.css';
// Import the main React App Component
import Root from 'containers/Root';
// Import the store
import { configureStore } from 'store';

// Import main global styles
import styles from './index.scss';

// Learn more about registerServiceWorker before enabling it
// import registerServiceWorker from './registerServiceWorker';

// Create the store
const store = configureStore();

// Grab the #root element
const rootElement = document.getElementById('root');
// Add in our 'root' classname, modified via css-modules
rootElement.classList.add(styles.root);

// Render to the DOM
ReactDOM.render(<Root {...store} />, rootElement);
// registerServiceWorker();
