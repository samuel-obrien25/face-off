import React from 'react';
import { BrowserRouter as Router, Route } from "../node_modules/react-router-dom";

import './App.css';

import Schedule from './Pages/Schedule';

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Route exact={true} path="/" component={Schedule} />
        </div>
      </div>
    </Router>
  );
};

export default App;