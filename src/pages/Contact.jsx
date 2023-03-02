import Container from 'react-bootstrap/Container'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Contact() {
  function checkIfEmpty(e) {
    e.target.classList.remove('is-invalid')
    e.target.classList.remove('is-valid')
    const newClass = e.target.value !== '' ? 'is-valid' : 'is-invalid'
    e.target.classList.add(newClass)
  }

  function checkIfEmail(e) {
    e.target.classList.remove('is-invalid')
    e.target.classList.remove('is-valid')
    const newClass = e.target.value.match(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    )
      ? 'is-valid'
      : 'is-invalid'
    e.target.classList.add(newClass)
  }

  function submitForm(e) {
    e.preventDefault()
    const email = e.target[1].value
    if (!email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/)) return
    // const name = e.target[0].value
    // const message = e.target[2].value
    console.log('submitted')
  }

  return (
    <Container
      fluid
      className="my-md-5 page d-flex flex-column justify-content-center"
    >
      <h2 className="text-center fw-bold">Contact</h2>
      <Container className="py-3 px-md-5 form">
        <Form onSubmit={submitForm}>
          <FloatingLabel
            className="text-dark m-3"
            controlId="floatingName"
            label="Name"
          >
            <Form.Control
              type="text"
              placeholder=" "
              aria-label="name"
              onChange={checkIfEmpty}
            />
          </FloatingLabel>
          <FloatingLabel
            className="text-dark m-3"
            controlId="floatingEmail"
            label="Email"
          >
            <Form.Control
              type="email"
              placeholder=" "
              aria-label="email"
              onChange={checkIfEmail}
            />
          </FloatingLabel>

          <FloatingLabel
            className="text-dark m-3"
            controlId="floatingMessage"
            label="Message"
          >
            <Form.Control
              as="textarea"
              style={{ height: '16rem' }}
              placeholder=" "
              aria-label="message"
              onChange={checkIfEmpty}
            />
          </FloatingLabel>
          <Button
            style={{
              display: 'block',
              margin: '2rem auto 0',
              background: 'var(--accent)',
            }}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Container>
    </Container>
  )
}
