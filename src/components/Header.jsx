import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import LinkContainer from 'react-router-bootstrap/LinkContainer'

export default function Header() {
  return (
    <header>
      <Navbar variant="dark" expand="sm">
        <Container fluid>
          <Container fluid className="justify-content-between align-items-center d-inline-flex">
            <Navbar.Brand className="align-middle fw-bolder fs-3">Jason Lieb</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Container>
          <Navbar.Collapse className="align-items-center">
            <Nav className="d-flex flex-row align-items-center justify-content-around mt-3 mt-sm-0">
              <LinkContainer to={'/'}>
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to={'projects'}>
                <Nav.Link>Projects</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
