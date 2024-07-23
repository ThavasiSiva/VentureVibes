import React from 'react'
import "./Navbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import img0 from "./images/logo.png";
import venturevibes from "./venturevibes.png"

function NavbarMain() {
  return (
    <div>
            <Navbar expand="lg" className="bkclr"  >
          <Container className="bar" fluid>
            <Navbar.Brand>
              <img style={{height:"45px"}} src={venturevibes}></img>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"  
            >
              <Nav className="me-md-4 gap-md-3 mb-xs-2">
                <Nav.Link href="/" className="fw-bold"
                style={{color:"rgb(77, 44, 44)"}}
                >
                  Home
                </Nav.Link>
                <Nav.Link href="/CityMaster" className="fw-bold"
                 style={{color:"rgb(77, 44, 44)"}}>
                  Popular Destination
                </Nav.Link>
              
                <Nav.Link href="#About" className="fw-bold"
                  style={{color:"rgb(77, 44, 44)"}}
                >
                  About
                </Nav.Link>
                <Nav.Link href="https://chat.whatsapp.com/F6ndsyBfBcgK9CzheS9xPM" className="fw-bold"
                 style={{color:"rgb(77, 44, 44)"}} 
                >
                  Contact Us
                </Nav.Link>

                <Nav href="#Login">
                  {/* <Button
                    variant="dark"
                    className="mb-2 mb-lg-0"
                    onClick={()=>navigate("/Login")}
                  >
                    Log in
                  </Button> */}
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      
      
    </div>
  )
}

export default NavbarMain
