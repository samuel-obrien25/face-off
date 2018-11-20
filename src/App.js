import React from 'react';
import { BrowserRouter as Router, Route } from "../node_modules/react-router-dom";

import './App.css';

import Home from './Pages/Home';
import Schedule from './Pages/Schedule';

class App extends React.Component {

  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">

          <Route exact={true} path="/" component={Home} />
          <Route path="/schedule" component={Schedule} />
          
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
