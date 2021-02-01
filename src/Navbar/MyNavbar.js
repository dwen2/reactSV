import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import './MyNavbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class MyNavbar extends React.Component {
  render() {
      return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Nepal Health Stats</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#Indicators">Indicators</Nav.Link>
                    <Nav.Link href="#Map">Map</Nav.Link>
                    <Nav.Link href="#About">About</Nav.Link>
                    <Nav.Link href="#Contact">Contact</Nav.Link>
                   
                </Nav>
                <Nav>                    
                    <Nav.Link href="#Admin">Sign in</Nav.Link>
                    <NavDropdown title="Languages" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">नेपाली</NavDropdown.Item>                    
                    {/* <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                    {/* <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                    </Nav.Link> */}
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        )
    }
}
