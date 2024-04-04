import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faTable } from '@fortawesome/free-solid-svg-icons';

function CollapsibleExample() {
  return (
    <Navbar className="navbar-left-top">
      <Container>
        <div className="logo-container">
          <Navbar.Brand as={Link} to='/' className='logo'>
            <img src="logo.png" alt="Logo" className="logo-image" />
          </Navbar.Brand>
        </div>
      </Container>
      <Container>
        <div className="button-container">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='button_container flex-column'>
              <Nav.Link as={Link} to='/article' className="button">
                <span className='text'>ARTIKKEL</span>
                <FontAwesomeIcon icon={faFileAlt} className="icon" style={{ fontSize: '24px' }} /> 
              </Nav.Link>
              <Nav.Link as={Link} to='/list' className="button2">
                <span className='text2'>TABEL</span>
                <FontAwesomeIcon icon={faTable} className="icon" style={{ fontSize: '20px' }} /> 
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;