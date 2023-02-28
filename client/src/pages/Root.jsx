import { Outlet, Link } from "react-router-dom";
import '../index.css'
import '../App.css'
import { InputGroup, Form, Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import {useState} from 'react'
import dummylogo from '../../public/images/dummy-logo.png'

export default function Root() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-10 bg-white">
      <Navbar expand="lg" bg="light" className="" >
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
      </div>
      <div className="mb-12"></div>
      <Outlet />
      <div id="detail"></div>
      <footer className="bg-slate-900 min-h-[200px]  p-4">
        <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col text-white">
          <img src={dummylogo} className="mb-2"/>
          <p className="leading-none">123 street</p>
          <p className="leading-none">Place, ON</p>
          <p className="leading-none">N1N 1N1</p>
        </div>
        </div>
        
       <p className="text-gray-400 text-center mb-1">&copy; Copyright 2023</p>
      </footer>
    </>
  );
}