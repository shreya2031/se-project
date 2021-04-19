import './App.css';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/" style={{color: "white"}}>reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/" style={{color: "white"}}>Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/Sahithi-Venkatesan/se-project" style={{color: "white"}}>GitHub</NavLink>
            </NavItem>
          </Nav>
          <NavbarText style={{color: "white"}}>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Example />
    </div>
  );
}

export default App;
