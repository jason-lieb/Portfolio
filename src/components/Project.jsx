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
import Github from '../assets/icons/Github'
import Svelte from '../assets/icons/Svelte'

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
  const layoutImg =
    index % 2 === 0
      ? { gridArea: '1 / 1 / -1 / -6' }
      : { gridArea: '1 / 6 / -1 / -1' }
  const layoutText =
    index % 2 === 0
      ? { gridArea: '1 / 6 / -1 / -1' }
      : { gridArea: '1 / 1 / -1 / -6' }
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
        <Stack
          direction="horizontal"
          className={`p-2 ${iconAlignClass} projectLinks`}
        >
          <a href={repo} className="projectSVG">
            <Github />
          </a>
          <a href={deploy} className="projectSVG mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              {/* Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
              <path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
            </svg>
          </a>
        </Stack>
      </Stack>
    </Container>
  )
}
