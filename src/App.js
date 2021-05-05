import './App.css';
import React, { useState } from 'react';
import { Component } from 'react'
import { Progress } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Weather from './components/Weather';

const NavComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <ul className="navbar-nav mr-auto">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li><Link to={'/'} className="nav-link" style={{"color":"white"}}> Home </Link></li>
            <li><Link to={'/weather'} className="nav-link" style={{"color":"white"}}>Weather</Link></li>
          </ul>
          </nav>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/weather' component={Weather} />
          </Switch>
        </div>
      </Router>
  );
}

const ProgressBar = (props) => {
  return (
    <div>
      <Progress color="info"/>
    </div>
  );
};

class App extends Component {
  render () {
    return (
      <div className='app'>
          <div className="stickyheader">
            <NavComponent sticky="top"/>
          </div>
      </div>
    )
  }
}

export default App;
