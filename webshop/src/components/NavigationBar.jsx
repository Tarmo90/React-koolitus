import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function NavigationBar() {
  const { t, i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  }

 

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to='/'>Webshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/admin'>Admin</Nav.Link>
            <Nav.Link as={Link} to='/shops'>{t("shops")}</Nav.Link>
            <Nav.Link as={Link} to='/contact'>{t("contact")}</Nav.Link>
            <Nav.Link as={Link} to='/cart'>{t("cart")}</Nav.Link>
          </Nav>

          <Nav>
            <img onClick={() => changeLang('ee')} className='lang' src="/estonian.png" alt="" />  
            <img onClick={() => changeLang('en')} className='lang' src="/english.png" alt="" />
            <img onClick={() => changeLang('fi')} className='lang' src="/finland.png" alt="" />
            <img onClick={() => changeLang('lv')} className='lang' src="/latvia.png" alt="" />

            <Nav.Link as={Link} to='/login'>{t("login")}</Nav.Link>
            <Nav.Link as={Link} to='/signup'>{t("signup")}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;