import { Outlet, Link } from "react-router-dom";
import '../index.css'
import '../App.css'
import { InputGroup, Form, Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import {useState} from 'react'

export default function Root() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <Navbar expand="lg" bg="light"  >
        <Container>
          <Navbar.Brand ><Link to="/" className="no-underline">PM Revamp</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className=""/>
          <Navbar.Collapse id="basic-navbar-nav">
            <InputGroup className="my-3 border border-green-500">
              <Form.Control
                placeholder="Search"
                aria-label="Search input"
                aria-describedby="navbar search field"
              />
              <Button variant="dark" id="button-addon2">
                Search
              </Button>
            </InputGroup>
            <Nav className="me-auto flex flex-row justify-start">
              
                <Link to={`createProject`} className="mx-1">
                  <Button variant="primary">
                    Create Project
                  </Button>
                </Link>
              
              
                <Link to={`configureModules`} className="mx-1">
                  <Button variant="primary">
                    Configure Modules
                  </Button>
                </Link>

                <Link to={`viewProjects`} className="mx-1">
                  <Button variant="primary">
                    View Projects
                  </Button>
                </Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <div id="detail"></div>
    </>
  );
}