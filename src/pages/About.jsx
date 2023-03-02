import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

export default function About() {
  return (
    <Container
      fluid
      className="my-md-5 page d-flex justify-content-center align-items-center container-xl"
    >
      <Stack className="d-flex flex-md-row align-items-center">
        <div className="rounded-5 profile-container">
          <img
            className="rounded-5 profile"
            src={require('../assets/profile-pic.jpeg')}
            alt="Profile"
          />
        </div>
        <Container className="d-flex flex-column justify-content-center mx-lg-5">
          <h5>Hi, my name is</h5>
          <h1>
            <span>Jason Lieb</span>
          </h1>
          <h4>Full Stack Developer</h4>
          <p>I'm a software engineer based in Atlanta, GA</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur ullam autem <span> eius libero</span> recusandae
            blanditiis delectus consectetur modi animi perspiciatis eligendi
            totam sit magni iure dolor, voluptatum laborum cum impedit!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur ullam autem eius libero recusandae blanditiis delectus
            consectetur modi animi perspiciatis eligendi totam sit magni iure
            dolor, voluptatum laborum cum impedit!
          </p>
        </Container>
      </Stack>
    </Container>
  )
}

/*

ME degree from GT
Until Galapagos
Dedicated

*/
