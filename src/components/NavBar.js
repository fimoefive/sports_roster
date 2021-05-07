import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Nav, Navbar,
  NavbarToggler,
  NavItem
} from 'reactstrap';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div>
        <Navbar color="light" light expand="md">
          <Link className="navbar-brand" to="/">Main</Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/add-player">Add Player</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/players">Player Cards</Link>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
