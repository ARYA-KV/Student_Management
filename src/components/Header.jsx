import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar() {
  return (
    <Navbar className="bg-success">
      <Container>
        <Link to={'/'} style={{ textDecoration: 'none' }} className='fw-bolder p-2'>
          <Navbar.Brand style={{ color: 'white' }}>
            <i className="fa-solid fa-school me-2"></i>
            Students Corner
          </Navbar.Brand>
        </Link>
        <Nav className="ml-auto">
          <Link to={'/Add'} style={{ textDecoration: 'none', color: 'white' }} className='fw-bolder p-2'>
            Add Student
          </Link>
          <Link to={'/view'} style={{ textDecoration: 'none', color: 'white' }} className='fw-bolder p-2'>
            View Students
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
