import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Github from '../assets/icons/Github'
import LinkedIn from '../assets/icons/LinkedIn'
import React from '../assets/icons/React'
import Bootstrap from '../assets/icons/Bootstrap'

export default function Footer() {
  return (
    <footer>
      <Container fluid>
        <Stack direction="horizontal">
          <Stack>
            <h5 className="mx-2">Connect</h5>
            <Stack direction="horizontal">
              <a
                href="https://github.com/jason-lieb"
                target={'_blank'}
                rel={'noreferrer'}
                className={'m-1'}
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/jasonlieb/"
                target={'_blank'}
                rel={'noreferrer'}
                className={'m-1'}
              >
                <LinkedIn />
              </a>
            </Stack>
          </Stack>
          <h6>© 2023 Jason Lieb</h6>
          <Stack align="right">
            <h5 className="mx-2">Built with</h5>
            <Stack direction="horizontal">
              <div className="m-1">
                <React />
              </div>
              <div className="m-1">
                <Bootstrap />
              </div>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </footer>
  )
}
