import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'
// import { useLocation } from 'react-router-dom'

export default function NavBar() {
  // const location = useLocation()
  // function selectedPage(page) {
  //   if (location.pathname === page) {
  //     return 'this page'
  //   }
  // }
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container fluid>
        <Container
          fluid
          className="justify-content-between align-items-center d-inline-flex"
        >
          <Navbar.Brand className="align-middle">Jason Lieb</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
        <Navbar.Collapse className="align-items-center">
          <Nav className="d-flex flex-row align-items-center justify-content-around mt-3 mt-md-0">
            <LinkContainer to={'/'}>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to={'projects'}>
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to={'contact'}>
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <a
              className="nav-link"
              href={require('../pages/Resume.pdf')}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
