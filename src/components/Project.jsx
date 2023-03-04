import React from 'react'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import ListGroup from 'react-bootstrap/ListGroup'
import ReactIcon from '../assets/icons/React'
import Bootstrap from '../assets/icons/Bootstrap'
import Express from '../assets/icons/Express'
import Handlebars from '../assets/icons/Handlebars'
import MySQL from '../assets/icons/MySQL'
import Sequelize from '../assets/icons/Sequelize'
import Tailwind from '../assets/icons/Tailwind'
import NodeJS from '../assets/icons/NodeJS'
import Vite from '../assets/icons/Vite'

export default function Project({
  title,
  description,
  image,
  alt,
  technologies,
}) {
  const icons = {
    React: ReactIcon,
    Bootstrap,
    NodeJS,
    Express,
    Handlebars,
    MySQL,
    Tailwind,
    Sequelize,
    Vite,
  }
  const stackStyle = {
    border: '1px var(--accent) solid',
    backgroundColor: 'var(--background)',
  }
  const listGroupItemStyle = {
    backgroundColor: 'var(--background)',
    border: 'none',
    padding: '0',
    marginRight: '0.5rem',
    // border: '1px solid var(--accent)',
    color: 'var(--text)',
  }
  return (
    <Container className="py-4 projectCard">
      <img
        src={require('../assets/images/' + image)}
        alt={alt}
        className="projectImg"
      />
      <h3 className="projectTitle">
        <span>{title}</span>
      </h3>
      <Stack style={stackStyle} className="rounded-3 projectDescription">
        <p>{description}</p>
        <ListGroup horizontal className="flex-wrap">
          {technologies.map((tech, index) => (
            <ListGroup.Item style={listGroupItemStyle} key={index}>
              {icons[tech] && React.createElement(icons[tech])}
              {tech}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Stack>
    </Container>
  )
}

/*
What was the outcome
Why build this project?
What challenged?
What was learned?
How has this helped future projects
What do differently
Process (wireframes, trello, github project)
Technologies used?

*/
