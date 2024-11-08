import React from 'react'
import Nav from 'react-bootstrap/Nav'
import LinkContainer from 'react-router-bootstrap/LinkContainer'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import profilePic from '../assets/images/profile-pic.webp'

export default function About() {
  return (
    <main>
      <Container fluid="xl" className="page d-flex justify-content-center align-items-center">
        <Stack className="d-flex flex-lg-row align-items-center justify-content-center">
          <div className="rounded-5 profile-container">
            <img className="rounded-5 profile" src={profilePic} alt="Profile" />
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
            <p>I write mostly Typescript, React, Haskell, and Nix.</p>
            <p></p>
            <div className="flex">
              <a
                className="nav-link active resume"
                href={'/Portfolio/resume.pdf'}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </Container>
        </Stack>
      </Container>
    </main>
  )
}
