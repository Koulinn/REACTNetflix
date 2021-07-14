import { Component } from "react";
import { Navbar, Nav, Form, Container } from "react-bootstrap";
import { FaSearch, FaBell, FaSortDown } from 'react-icons/fa'
import { Link, withRouter } from 'react-router-dom'


class NavBar extends Component {
  render() {
    return (
     <Container fluid>
        <Navbar variant="dark" className="sticky-top bg-color px-0">
          <Navbar.Brand  className="p-0">
            <Link to="/home"><img src="./assets/netflix_logo.png" className="img-logo h-100" alt=""></img></Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/home" className={this.props.location.pathname === '/home'
                    ? 'nav-link active'
                    : 'nav-link'}>Home</Link>
            <Link to="/shows"  className={this.props.location.pathname === '/shows'
                    ? 'nav-link active'
                    : 'nav-link'}>TV Shows</Link>
            <Link to="/movies" className={this.props.location.pathname === '/movies'
                    ? 'nav-link active'
                    : 'nav-link'}>Movies</Link>
            <Link to="recentlyAdded" className={this.props.location.pathname === '/recentlyAdded'
                    ? 'nav-link active'
                    : 'nav-link'}>Recently Added</Link>
            <Link to="myList" className={this.props.location.pathname === '/myList'
                    ? 'nav-link active'
                    : 'nav-link'}>My List</Link>
          </Nav>
          <Form inline>
          <FaSearch className="mr-3 nav-icons" />
            <p className="pt-3 mr-3 text-white">KIDS</p>
            <FaBell className="mr-3 nav-icons"/>
            <img src="./assets/kidssecond.png" className="mr-1" alt=""></img>
            <FaSortDown className="nav-icons fixed-alignment"/>
          </Form>
        </Navbar>
     </Container>
    );
  }
}

export default withRouter(NavBar)