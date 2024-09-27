import React from 'react'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import ListGroup from 'react-bootstrap/ListGroup'

import ReactIcon from '../assets/icons/React'
import Bootstrap from '../assets/icons/Bootstrap'
import Express from '../assets/icons/Express'
import Handlebars from '../assets/icons/Handlebars'
import MySQL from '../assets/icons/MySQL'
import MongoDB from '../assets/icons/MongoDB'
import Sequelize from '../assets/icons/Sequelize'
import Tailwind from '../assets/icons/Tailwind'
import NodeJS from '../assets/icons/NodeJS'
import Vite from '../assets/icons/Vite'
import Svelte from '../assets/icons/Svelte'
import Heroku from '../assets/icons/Heroku'
import Github from '../assets/icons/Github'
import ExternalLink from '../assets/icons/ExternalLink'
import Spotify from '../assets/icons/Spotify'
import GraphQL from '../assets/icons/GraphQL'

export default function Project({
  title,
  description,
  image,
  alt,
  technologies,
  repo,
  deploy,
  index,
}) {
  deploy = deploy || undefined

  const icons = {
    React: ReactIcon,
    Bootstrap,
    NodeJS,
    Express,
    Handlebars,
    MongoDB,
    MySQL,
    Tailwind,
    Sequelize,
    Vite,
    Svelte,
    Heroku,
    'Spotify API': Spotify,
    GraphQL,
  }
  const layoutImg = index % 2 === 0 ? {gridArea: '1 / 1 / -1 / -6'} : {gridArea: '1 / 6 / -1 / -1'}
  const layoutText = index % 2 === 0 ? {gridArea: '1 / 6 / -1 / -1'} : {gridArea: '1 / 1 / -1 / -6'}
  const textAlignClass = index % 2 === 0 ? 'text-end' : 'text-start'
  const iconAlignClass = index % 2 === 0 ? 'align-self-end' : 'align-self-start'
  const listGroupItemStyle = {
    backgroundColor: 'var(--textBackground)',
    border: 'none',
    padding: '0',
    marginRight: '0.5rem',
    color: 'var(--text)',
  }
  return (
    <Container className="py-4 d-grid px-md-5 projectCard">
      <img
        src={require('../assets/images/' + image)}
        alt={alt}
        className="projectImg rounded-2"
        style={layoutImg}
      />
      <Stack style={layoutText} className="py-md-5 my-auto">
        <h3 className={`projectTitle px-md-3 ${textAlignClass}`}>
          <span>{title}</span>
        </h3>
        <Stack
          style={{
            backgroundColor: 'var(--textBackground)',
          }}
          className="projectDescription rounded-3"
        >
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
        <Stack direction="horizontal" className={`p-2 ${iconAlignClass} projectLinks`}>
          <a
            href={repo}
            alt={`Github Repo Link for ${title}`}
            target={'_blank'}
            rel={'noreferrer'}
            className="projectSVG"
          >
            <Github />
          </a>
          <a
            href={deploy}
            alt={`Deployed Link for ${title}`}
            target={'_blank'}
            rel={'noreferrer'}
            className="projectSVG mx-2"
          >
            {deploy && <ExternalLink />}
          </a>
        </Stack>
      </Stack>
    </Container>
  )
}
