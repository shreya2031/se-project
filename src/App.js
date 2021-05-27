import './App.css';
import React from 'react';
import { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Weather from './components/Weather';


const NavComponent = (props) => {
  return (
    <Router>
        <div>
          <nav className="navbar navbar-expand-lg bg-dark">
          <ul className="navbar-nav mr-auto">
            <li style={{"color":"white"}} className="nav-link nav-font">Tiempo Grooves</li>
            <li><Link to={'/se-project'} className="nav-link" style={{"color":"white","marginLeft":"1600%","fontSize":"18px"}}> Home </Link></li>
            <li><Link to={'/weather'} className="nav-link" style={{"color":"white","marginLeft":"1300%","fontSize":"18px"}}>Weather</Link></li>
          </ul>
          </nav>
          <Switch>
              <Route exact path='/se-project' component={Home} />
              <Route path='/weather' component={Weather} />
          </Switch>
        </div>
      </Router>
  );
}

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
