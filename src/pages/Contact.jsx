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

  // function checkIfEmail(e) {
  //   e.target.classList.remove('is-invalid')
  //   e.target.classList.remove('is-valid')
  //   const newClass = e.target.value.match(
  //     /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  //   )
  //     ? 'is-valid'
  //     : 'is-invalid'
  //   e.target.classList.add(newClass)
  // }

  function submitForm(e) {
    e.preventDefault()
    if (!e.target[0].value || !e.target[1].value || !e.target[2].value) return
    // if (!email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/)) return
    const body = `Hi Jason,%0D%0A
    ${e.target[2].value}%0D%0A
    Best Regards,%0D%0A
    ${e.target[0].value}`

    window.open(
      `mailto:jason.lieb@outlook.com?subject=${e.target[1].value}&body=${body}`
    )
  }
  return (
    <main>
      <Container
        fluid
        className="page d-flex flex-column justify-content-center align-items-center"
      >
        <h2 className="text-center fw-bold">
          <span>Contact</span>
        </h2>
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
              controlId="floatingSubject"
              label="Subject"
            >
              <Form.Control
                type="text"
                placeholder=" "
                aria-label="subject"
                onChange={checkIfEmpty}
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
                border: 'var(--accent)',
                color: 'black',
              }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
          <p
            style={{
              textAlign: 'center',
              marginTop: '2rem',
              fontSize: '1.125rem',
            }}
          >
            Or email me at{' '}
            <span>
              <a href="mailto:jason.lieb@outlook.com">Jason.Lieb@outlook.com</a>
            </span>
          </p>
        </Container>
      </Container>
    </main>
  )
}
