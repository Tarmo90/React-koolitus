import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'; 
import { Link, useNavigate } from 'react-router-dom';
import  '../css/NavBar.css'
import { useContext } from 'react';
import { AuthContext } from '../pages/auth/AuthContext';
import { useTranslation } from 'react-i18next';

 
function NavigationBar() {
  const { t, i18n } = useTranslation();

  const{loggedIn, setLoggedIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = () => {
    setLoggedIn(false);
    navigate('/');
  }

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  }
  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar custom-text-color" data-bs-theme="dark">
      <Container className="custom-container">
        <Navbar.Brand as={Link} to='/' className='custom-text-color'>FOREX</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link as={Link} to='/homepage' className='custom-text-color'>{t("features")}</Nav.Link>
            <Nav.Link as={Link} to='/' className='custom-text-color'>{t("pricing")}</Nav.Link>
            
          </Nav>
          <NavDropdown className='outline-icon' title={<span> <FontAwesomeIcon icon={faUser}  /></span>} id="collapsible-nav-dropdown">          
          { loggedIn === false &&  <NavDropdown.Item as={Link} className='custom-dropdown-item' to='/signin'>{t("sign_in")}</NavDropdown.Item>}
          { loggedIn === false && <NavDropdown.Item as={Link} className='custom-dropdown-item' to='/signup'>{t("register")}</NavDropdown.Item>}
          { loggedIn === true && <NavDropdown.Item onClick={logout} className='custom-dropdown-item'>{t("logout")}</NavDropdown.Item>}
          </NavDropdown>
          <NavDropdown className='outline-icon' title={<span> <FontAwesomeIcon icon={faBars}/></span>} id="collapsible-nav-dropdown" >
              <NavDropdown.Item as={Link} to='/' className='custom-dropdown-item'>{t("action")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/' className='custom-dropdown-item'>{t("another")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/contactUs' className='custom-dropdown-item'>{t("contactUs")}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown className='arrow' title={<span className="language-title">{t("language")}</span>} id="language-dropdown">
                <NavDropdown.Item onClick={() => changeLang('en')} className='custom-dropdown-item'>{t("english")} <img className='lang' src="/english.png" alt="" /></NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLang('ee')} className='custom-dropdown-item'>{t("estonia")} <img className='lang2' src="/estonian.png" alt="" /></NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;