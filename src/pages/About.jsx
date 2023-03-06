import React from 'react'
import { ListGroup } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

import ReactIcon from '../assets/icons/React'
import Bootstrap from '../assets/icons/Bootstrap'
import Express from '../assets/icons/Express'
import Handlebars from '../assets/icons/Handlebars'
import MySQL from '../assets/icons/MySQL'
import Sequelize from '../assets/icons/Sequelize'
import Tailwind from '../assets/icons/Tailwind'
import NodeJS from '../assets/icons/NodeJS'
import Vite from '../assets/icons/Vite'
import Svelte from '../assets/icons/Svelte'

export default function About() {
  const skills = [
    'HTML',
    'CSS',
    'Javascript',
    'React',
    'Svelte',
    'Tailwind',
    'Bootstrap',
    'Vite',
    'Webpack',
    'NodeJS',
    'Express',
    'Handlebars',
    'MySQL',
    'Sequelize',
    'MongoDB',
    'Mongoose',
  ]
  const listGroupItemStyle = {
    backgroundColor: 'var(--background)',
    border: 'none',
    padding: '0',
    marginRight: '0.5rem',
    color: 'var(--text)',
  }
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
    Svelte,
  }
  return (
    <main>
      <Container
        fluid="xl"
        className="page d-flex justify-content-center align-items-center"
      >
        <Stack className="d-flex flex-lg-row align-items-center justify-content-center">
          <div className="rounded-5 profile-container">
            <img
              className="rounded-5 profile"
              src={require('../assets/images/profile-pic.jpeg')}
              alt="Profile"
            />
          </div>
          <Container className="d-flex flex-column justify-content-center px-4 mx-lg-5">
            <h5>Hi, my name is</h5>
            <h1>
              <span>Jason Lieb</span>
            </h1>
            <h4>Full Stack Developer</h4>
            <p>
              I'm a <span>software engineer</span> based in Atlanta, GA
            </p>
            <p>
              As a mechanical engineering major at <span>Georgia Tech</span>, I
              was interested by coding, but I never thought I would switch
              fields. However, as I began working, my enthusiasm for mechanical
              design waned. I was hesitant to switch careers due to the time
              required to get additional schooling. However, everything changed
              when I had dinner with a friend while on vacation in the Galapagos
              Islands. He suggested that I enroll in a coding bootcamp.
            </p>
            <p>
              Upon returning, I began <span>self-studying</span> web development
              and, three months later, I quit my job to attend
              <span> Georgia Tech's full stack bootcamp</span>. Since then, I
              have been fully dedicated to my new career and haven't looked
              back.
            </p>
            <h4>Skills</h4>
            <ListGroup horizontal className="flex-wrap">
              {skills.map((skill) => (
                <ListGroup.Item style={listGroupItemStyle} key={skill}>
                  {icons[skill] && React.createElement(icons[skill])}
                  {skill}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Container>
        </Stack>
      </Container>
    </main>
  )
}
