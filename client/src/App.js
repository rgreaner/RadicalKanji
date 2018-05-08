import React, { Component } from 'react';
import Flashcard from './Components/Flashcard';
import Registration from './Components/Registration';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

class App extends Component {


  render() {
    return (
      // don't need anything outside of the routes
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Welcome} /> */}
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route exact path="/registration" component={Registration} /> */}
          <Route exact path="/flashcard" component={Flashcard} />
          {/* determines what component is routed to. below route would be 404*/}
          {/* <Route component={NoMatch} />  */}

        </Switch> 
      </Router>

    );
  }
}

export default App;
