import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

import HTML from '../assets/icons/HTML'
import CSS from '../assets/icons/CSS'
import Javascript from '../assets/icons/Javascript'
import ReactIcon from '../assets/icons/React'
import Svelte from '../assets/icons/Svelte'
import Redux from '../assets/icons/Redux'
import jQuery from '../assets/icons/jQuery'
import Jest from '../assets/icons/Jest'
import Tailwind from '../assets/icons/Tailwind'
import Bootstrap from '../assets/icons/Bootstrap'
import Vite from '../assets/icons/Vite'
import Webpack from '../assets/icons/Webpack'
import NodeJS from '../assets/icons/NodeJS'
import Express from '../assets/icons/Express'
import Handlebars from '../assets/icons/Handlebars'
import MySQL from '../assets/icons/MySQL'
import Sequelize from '../assets/icons/Sequelize'
import MongoDB from '../assets/icons/MongoDB'
import Heroku from '../assets/icons/Heroku'
import GraphQL from '../assets/icons/GraphQL'
import ESLint from '../assets/icons/ESLint'
import Prettier from '../assets/icons/Prettier'

export default function About() {
  const skills = [
    'HTML',
    'CSS',
    'Javascript',
    'React',
    'Svelte',
    'Redux',
    'Tailwind',
    'Bootstrap',
    'Vite',
    'Webpack',
    'jQuery',
    'Jest',
    'NodeJS',
    'Express',
    'Handlebars',
    'MySQL',
    'Sequelize',
    'MongoDB',
    'Heroku',
    'GraphQL',
    'ESLint',
    'Prettier',
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
    HTML,
    CSS,
    Javascript,
    React: ReactIcon,
    Svelte,
    Redux,
    Tailwind,
    Bootstrap,
    Vite,
    Webpack,
    jQuery,
    Jest,
    NodeJS,
    Express,
    Handlebars,
    MySQL,
    Sequelize,
    MongoDB,
    Heroku,
    GraphQL,
    ESLint,
    Prettier,
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
              src={require('../assets/images/profile-pic.webp')}
              alt="Profile"
            />
          </div>
          <Container className="d-flex flex-column justify-content-center px-4 mx-lg-5">
            <h5>Hi, my name is</h5>
            <h1>
              <span>Jason Lieb</span>
            </h1>
            <h4>Full Stack Software Engineer</h4>
            <p>
              I'm a <span>software engineer</span> based in Atlanta, GA.
            </p>
            <p>
              As a mechanical engineering major at <span>Georgia Tech</span>, I
              was interested by coding, but I never thought I would switch
              fields. However, as I began working, my enthusiasm for mechanical
              design waned. I was hesitant to switch careers due to the time
              required to get additional schooling, but everything changed when
              I caught up with a friend while on vacation in the Galapagos
              Islands. He suggested that I enroll in a coding bootcamp.
            </p>
            <p>
              Upon returning, I began <span>self-studying</span> web development
              and, three months later, I transitioned to pursuing a{' '}
              <span>
                certificate in Full Stack Web Development from Georgia Tech
              </span>{' '}
              full-time. Since then, I have been fully dedicated to my new
              career and haven't looked back.
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
