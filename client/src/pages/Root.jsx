import { Outlet, Link } from "react-router-dom";
import '../index.css'
import { InputGroup, Form, Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

export default function Root() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand ><Link to="/" className="no-underline">PM Revamp</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
              <Nav.Link >
                <Link to={`createProject`} className="mx-1">
                  <Button variant="primary">
                    Create Project
                  </Button>
                </Link>
              </Nav.Link>
              <Nav.Link >
                <Link to={`configureModules`} className="mx-1">
                  <Button variant="primary">
                    Configure Modules
                  </Button>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <div id="detail"></div>
    </>
  );
}