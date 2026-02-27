import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `mx-1 px-3 py-2 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
      isActive ? 'border border-accent text-accent' : 'text-text hover:text-accent'
    }`

  return (
    <header>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-background focus:rounded"
      >
        Skip to main content
      </a>
      <nav className="min-h-[4.5rem] flex items-center px-4" aria-label="Main navigation">
        <div className="w-full flex justify-between items-center">
          <span className="font-bold text-2xl text-text">Jason Lieb</span>
          <button
            className="sm:hidden text-text p-2 min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent rounded"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="nav-menu"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div
            id="nav-menu"
            className={`${isOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row items-center absolute sm:static top-[4.5rem] left-0 right-0 bg-background sm:bg-transparent p-4 sm:p-0 z-20`}
          >
            <NavLink to="/Portfolio" end className={linkClass}>
              About
            </NavLink>
            <NavLink to="/Portfolio/projects" className={linkClass}>
              Projects
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}
