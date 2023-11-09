/* This is the entry point for the application.*/
/* Responsible for rendering the application to the DOM (Document Object Model). */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from './App';
import Redirect from './redirect';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={ <App /> }/>
        <Route path="/found" element={<Redirect to="https://ollieboyne.github.io/FOUND" />} />
        <Route path="/find" element={<Redirect to="https://ollieboyne.github.io/FIND" />} />
        <Route path="/synfoot" element={<Redirect to="https://github.com/OllieBoyne/SynFoot" />} />
        <Route path="/wldo" element={<Redirect to="https://sites.google.com/view/wldo" />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


