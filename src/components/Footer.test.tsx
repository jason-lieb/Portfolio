import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer'

describe('Footer', () => {
  it('renders copyright with current year', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`© ${year}`))).toBeInTheDocument()
  })

  it('renders GitHub link', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    expect(
      Array.from(document.querySelectorAll('a')).find((a) =>
        a.getAttribute('href')?.includes('github.com')
      )
    ).toHaveAttribute('href', 'https://github.com/jason-lieb')
  })

  it('renders LinkedIn link', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    expect(
      Array.from(document.querySelectorAll('a')).find((a) =>
        a.getAttribute('href')?.includes('linkedin.com')
      )
    ).toHaveAttribute('href', 'https://www.linkedin.com/in/jasonlieb/')
  })
})
