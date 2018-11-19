import React from 'react';
import { BrowserRouter as Router, Route } from "../node_modules/react-router-dom";

import './App.css';

import Home from './Pages/Home';
import Schedule from './Pages/Schedule';

/*============================
-----TO DO LIST---------------
============================*/
//DO NOW
//==Sketch out the rest of the designs in XD
//=====Game Card
//=====Schedule Card
//=====Sorting Solutions
//=====Header


//DO SOON
//==Reorganize components so that they make more sense

//==Reorganize CSS because it's out of control
//======Choose One-- CamelCase or kabob-case

//==Figure out how to convert a JSON string to a javascript Date object.
//=======Use that knowledge to make UX improvements including
//==========Auto scroll to latest game

//==Add Customized Team Header to schedule page
//=====Add Records


//===========DO LATER
//==Add sorting
//======League
//==========Sort by League Points
//======Division
//==========Sort by Division Points
//==Clean up the UI and make UX improvements


//===========DO EVENTUALLY
//==Add "Players" Menu
//==Add "Team Stats" Menu


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
