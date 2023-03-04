import Container from 'react-bootstrap/Container'

export default function Project({ title, description, image, alt }) {
  const imgStyle = { width: '300px' }
  return (
    <Container>
      <img
        src={require('../assets/images/' + image)}
        alt={alt}
        style={imgStyle}
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </Container>
  )
}

/*
Why build this project?
What challenged?
What was learned?
How has this helped future projects
What do differently
Process (wireframes, trello, github project)

*/
