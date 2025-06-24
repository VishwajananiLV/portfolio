// Navbar.js

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <h2>My Portfolio</h2>
//       </div>
//       <div className="navbar-right">
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/projects">Projects</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// navbar.js

// src/components/Navbar.js

import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar sticky-top shadow-sm" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-dark">
          My Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link as={Link} to="/projects" className="nav-link-custom">Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;


