import './App.css';
import React from 'react';
import { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Weather from './components/Weather';
import { Navbar,Nav, NavItem } from 'reactstrap';


const NavComponent = (props) => {
  return (
    <Router>
        <div className="navbar-fix">
          <Navbar className="navbar navbar-expand-lg">
          <Nav className="mr-auto" navbar>
          <ul className="navbar-nav mr-auto">
          <NavItem>
            <Nav><li style={{"color":"white"}} className="nav-link nav-font">Tiempo Grooves</li></Nav>
          </NavItem>
          <NavItem>
            <Nav><li className="nav1"><Link to={'/se-project'} className="nav-link" style={{"color":"white","fontSize":"21px"}}> Home </Link></li></Nav>
          </NavItem>
          <NavItem>
          <Nav><li className="nav2"><Link to={'/weather'} className="nav-link" style={{"color":"white","fontSize":"21px"}}>Weather</Link></li></Nav>
          </NavItem>
          </ul>
          </Nav>
          </Navbar>
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
