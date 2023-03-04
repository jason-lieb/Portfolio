import { Container } from 'react-bootstrap'

export default function ErrorPage() {
  return (
    <Container className="page d-flex flex-column align-items-center justify-content-center">
      <h3 className="text-center">This page does not exist</h3>
      <h4 className="text-center">
        Please choose a page from the navigation bar
      </h4>
    </Container>
  )
}
