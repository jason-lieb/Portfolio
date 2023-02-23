import { Container, Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'
import { useLocation } from 'react-router-dom'

export default function NavBar() {
  const location = useLocation()
  function selectedPage(page) {
    if (location.pathname === page) {
      return 'this page'
    }
  }
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Jason Lieb</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to={'/'}>
            <Nav.Link>About Me {selectedPage('/')}</Nav.Link>
          </LinkContainer>
          <LinkContainer to={'portfolio'}>
            <Nav.Link>Portfolio {selectedPage('/portfolio')}</Nav.Link>
          </LinkContainer>
          <LinkContainer to={'contact'}>
            <Nav.Link>Contact {selectedPage('/contact')}</Nav.Link>
          </LinkContainer>
          <LinkContainer to={'resume'}>
            <Nav.Link>Resume {selectedPage('/resume')}</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
