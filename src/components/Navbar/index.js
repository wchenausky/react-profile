import React from "react";
import "./style.css"
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom'


const NavBar = () => {

  return(
    <>
    <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand as={Link} to="/react-profile/home">William Chenausky</Navbar.Brand>
        <Nav className="ml-auto" defaultActiveKey="1">
     <Nav.Item><Nav.Link eventKey="3" as={Link} to="/react-profile/contact">Contact</Nav.Link></Nav.Item>
     <Nav.Item><Nav.Link eventKey="2" as={Link} to="/react-profile/portfolio">Portfolio</Nav.Link></Nav.Item>
      </Nav>
    
    </Navbar>
  </>
  )
}
export default NavBar;