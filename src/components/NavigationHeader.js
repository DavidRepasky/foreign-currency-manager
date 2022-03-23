import React, { Component, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown, OffcanvasTitle } from 'react-bootstrap';
import { CloseButton } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { NavbarBrand } from 'react-bootstrap';
import { NavbarToggle }  from 'react-bootstrap/esm/NavbarToggle';
import { Offcanvas } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';



class CustomNav extends Component {
    constructor(props) {
       super(props);

    }
    render() {    
      
       return(
        <div className="custom-off-canvas-menu">
         <Navbar collapseOnSelect className="yellow fixed-top" expand={false}>
          <Container fluid>
          <Navbar.Brand href="#" className="logo-brand">Currency Globe</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
         <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          style={{ backgroundImage: "url('./map-background-dark.png')", backgroundPosition: "center center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}
         >
        <Offcanvas.Header style={{backgroundColor: "#FAB20B"}} closeButton>
          <OffcanvasTitle className="logo-brand" style={{fontWeight: "800"}}>MENU</OffcanvasTitle>
        </Offcanvas.Header>    
            <Offcanvas.Body>
             <Nav.Item><Nav.Link eventKey="1" as={Link} to="/dashboard"><Button className="nav-menu-buttons" size="lg">BUDGET DASHBOARD</Button></Nav.Link></Nav.Item>
             <Nav.Item><Nav.Link eventKey="2" as={Link} to="/"><Button className="nav-menu-buttons" size="lg">QUICK CONVERSION</Button></Nav.Link></Nav.Item>
             <Nav.Item><Nav.Link eventKey="3" as={Link} to="/budgeting-tool"><Button className="nav-menu-buttons" size="lg">BUDGETING TOOL</Button></Nav.Link></Nav.Item>
             <Nav.Item><Nav.Link eventKey="4" as={Link} to="/manage-expenses"><Button className="nav-menu-buttons" size="lg">EXPENSE TRACKER</Button></Nav.Link></Nav.Item>
             <Nav.Item><Nav.Link eventKey="5" as={Link} to="/add-expenses"><Button className="nav-menu-buttons" size="lg">ADD EXPENSE</Button></Nav.Link></Nav.Item>
             <Nav.Item><Nav.Link eventKey="6" as={Link} to="/settings"><Button className="nav-menu-buttons" size="lg">SETTINGS</Button></Nav.Link></Nav.Item>
            </Offcanvas.Body>
           </Navbar.Offcanvas>
          </Container>
         </Navbar>
        </div>

      );

    }
 }

 export default CustomNav;
