import React from 'react';
import { BrowserRouter as Router, Route } from "../node_modules/react-router-dom";

import './App.css';

import Home from './Containers/Pages/Home';
import Schedule from './Containers/Pages/Schedule';
import Teams from './Containers/Pages/Teams';
import Players from './Containers/Pages/Players';



class App extends React.Component {

  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">

          <Route exact={true} path="/" component={Home} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/teams" component={Teams} />
          <Route path="/players" component={Players} />

        </div>
      </div>
      </Router>
    );
  }
}

export default App;
