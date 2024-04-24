import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'; 
import { Link, useNavigate } from 'react-router-dom';
import  '../css/NavBar.css'
import { useContext } from 'react';
import { AuthContext } from '../pages/auth/AuthContext';

 
function NavigationBar() {
  const{loggedIn, setLoggedIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = () => {
    setLoggedIn(false);
    navigate('/');
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar custom-text-color" data-bs-theme="dark">
      <Container className="custom-container">
        <Navbar.Brand as={Link} to='/' className='custom-text-color'>FOREX</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto ">
            <Nav.Link as={Link} to='/homepage' className='custom-text-color'>Features</Nav.Link>
            <Nav.Link as={Link} to='/' className='custom-text-color'>Pricing</Nav.Link>
          </Nav>

          <NavDropdown className='outline-icon' title={<span> <FontAwesomeIcon icon={faUser}  /></span>} id="collapsible-nav-dropdown">          
          { loggedIn === false && <NavDropdown.Item as={Link} to='/signin'>Sign in</NavDropdown.Item>}
          { loggedIn === false && <NavDropdown.Item as={Link} to='/signup'>Register</NavDropdown.Item>}
          { loggedIn === true && <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>}
          </NavDropdown>
          <NavDropdown className='outline-icon' title={<span> <FontAwesomeIcon icon={faBars}/></span>} id="collapsible-nav-dropdown" >
              <NavDropdown.Item as={Link} to='/' className='custom-dropdown-item'>Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/' className='custom-dropdown-item'>Another action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/' className='custom-dropdown-item'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to='/' className='custom-dropdown-item'>Separated link</NavDropdown.Item>
            </NavDropdown>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;