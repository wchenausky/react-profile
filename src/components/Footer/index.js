import React from "react";
import {Navbar, Nav} from 'react-bootstrap';

const Footer = () => {
  return(
    <>
      <Navbar bg="dark" variant="dark" fixed="bottom">
        <Navbar.Brand href="/home">Linked In/GitHub</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Item><div><a href="https://www.linkedin.com/in/william-chenausky/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-3x"></i></a></div></Nav.Item>
          <Nav.Item><div><a href="https://github.com/wchenausky/" target="_blank" rel="noreferrer"><i className="fab fa-github-square fa-3x ml-3"></i></a></div></Nav.Item>
        </Nav>
      </Navbar>
    </>
  )
}

export default Footer;