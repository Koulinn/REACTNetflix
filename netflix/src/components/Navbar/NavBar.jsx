import { Component } from "react";
import { Navbar, Nav, Form, Container } from "react-bootstrap";
import { FaSearch, FaBell, FaSortDown } from 'react-icons/fa'
class NavBar extends Component {
  render() {
    return (
     <Container fluid>
        <Navbar variant="dark" className="sticky-top bg-color px-0">
          <Navbar.Brand href="#home" className="p-0">
            <img src="./assets/netflix_logo.png" className="img-logo h-100" alt=""></img>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">TV Shows</Nav.Link>
            <Nav.Link href="#pricing">Movies</Nav.Link>
            <Nav.Link href="#added">Recently Added</Nav.Link>
            <Nav.Link href="#list">My List</Nav.Link>
          </Nav>
          <Form inline>
          <FaSearch className="mr-3 nav-icons" />
            <p className="pt-3 mr-3 text-white">KIDS</p>
            <FaBell className="mr-3 nav-icons"/>
            <img src="./assets/kidssecond.png" className="mr-1" alt=""></img>
            <FaSortDown className="nav-icons"/>
          </Form>
        </Navbar>
     </Container>
    );
  }
}

export default NavBar