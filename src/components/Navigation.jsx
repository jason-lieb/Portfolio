import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <Nav>
      <Link to={'/'}>About Me </Link>
      <Link to={'portfolio'}>Portfolio </Link>
      <Link to={'contact'}>Contact </Link>
      <Link to={'resume'}>Resume </Link>
    </Nav>
  )
}
