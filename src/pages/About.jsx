import React from 'react'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

export default function About() {
  const listGroupItemStyle = {
    backgroundColor: 'var(--background)',
    border: 'none',
    padding: '0',
    marginRight: '0.5rem',
    color: 'var(--text)',
  }
  return (
    <main>
      <Container fluid="xl" className="page d-flex justify-content-center align-items-center">
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
              As a mechanical engineering major at <span>Georgia Tech</span>, I was interested by
              coding, but I never thought I would switch fields. However, as I began working, my
              enthusiasm for mechanical design waned. I was hesitant to switch careers due to the
              time required to get additional schooling, but everything changed when I caught up
              with a friend while on vacation in the Galapagos Islands. He suggested that I enroll
              in a coding bootcamp.
            </p>
            <p>
              Upon returning, I began <span>self-studying</span> web development and, three months
              later, I transitioned to pursuing a{' '}
              <span>certificate in Full Stack Web Development from Georgia Tech</span> full-time.
              Since then, I have been fully dedicated to my new career and haven't looked back.
            </p>
          </Container>
        </Stack>
      </Container>
    </main>
  )
}
