import React from "react";
import "./style.css"
import {Navbar, Nav} from 'react-bootstrap';


const NavBar = () => {

  return(
    <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">William Chenausky</Navbar.Brand>
      <Nav className="mr-auto">
     <Nav.Link href="#home">William Chenausky</Nav.Link>
        <Nav.Link href="#home">Contact</Nav.Link>
        <Nav.Link href="#features">Porfolio</Nav.Link>
      </Nav>
    
    </Navbar>
  </>
  )
}
export default NavBar;