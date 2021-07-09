import React, { Component } from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";

class NavBarComp extends Component {
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: "#141414", padding: 0, height:'80px'}} variant="#black">
          <Navbar.Brand>
            <a href="#">
              <img
                src="./assets/netflix_logo.png"
                alt="Netflix"
                style={{ width: 80, marginLeft: 30, fontSize: 14 }}
              />
            </a>
          </Navbar.Brand>
          <Nav className="mr-auto">

            <Nav.Link style={{color: "#e5e5e5" }} href="#">
              Home
            </Nav.Link>
            <Nav.Link style={{color: "#e5e5e5" }} href="#">
              Tv Shows
            </Nav.Link>
            <Nav.Link style={{color: "#e5e5e5" }} href="#">
              Movies
            </Nav.Link>
            <Nav.Link style={{color: "#e5e5e5" }} href="#">


              Recently Added
            </Nav.Link>
          </Nav>
          <Form inline style={{marginRight: 30}}>
           
            <Nav.Link style={{ color: "white"}} href="#">
              KIDS
            </Nav.Link>
            <a className="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
              fill="white" className="bi bi-bell-fill" viewBox="0 0 16 16">
              <path
                d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
          </a>
          <a className="nav-link dropdown" href="profile.html">
            <img src="assets/who.png" width="20" height="20"
              viewBox="0 0 16 16alt=" />
            </a>
          <a className="nav-link dropdown-toggle text-white" id="navbarDropdown" 
            href="#" 
            role="button" 
            data-toggle="dropdown"
            aria-expanded="false">
          </a>
          </Form>
        </Navbar>
      </div>
    );
  }
}
export default NavBarComp;
