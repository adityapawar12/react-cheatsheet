// THE INDEX JS IS THE FILE WHICH IS EXECUTED INITIALLY.
// IT HAS FOLLOWING IMPORTS. WHICH HAS IT'S CSS, REACT, REACT-DOM AND APP(COMPONENT).

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// createRoot() controls the contents of the container node you pass in. 
// Any existing DOM elements inside are replaced when render is called. 
// Later calls use React’s DOM diffing algorithm for efficient updates.
// createRoot() does not modify the container node (only modifies the children of the container).

// The document.getElementById gets the container div with id root.
// Then createRoot creates a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Initial render using the root.render
root.render(
// StrictMode is a tool for highlighting potential problems in an application.
  <React.StrictMode>
// Our room component App.
    <App />
  </React.StrictMode>
);
