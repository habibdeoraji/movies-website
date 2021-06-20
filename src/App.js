import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import CardDetails from './components/CardDetails';
import PageNotFound from './components/PageNotFound';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (<div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/carddetails/:imdbID" component={CardDetails} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>);
  }
}

export default App;