import { Container } from 'react-bootstrap'

export default function ErrorPage() {
  return (
    <Container style={{ padding: '40vh 0' }}>
      <h3 className="text-center">This page does not exist</h3>
      <h4 className="text-center">
        Please choose a page from the navigation bar
      </h4>
    </Container>
  )
}
