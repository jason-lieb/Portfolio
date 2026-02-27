import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `mx-1 px-2 py-1.5 rounded transition-colors ${
      isActive
        ? 'border border-accent text-accent'
        : 'text-text hover:text-accent'
    }`

  return (
    <header>
      <nav className="min-h-[4.5rem] flex items-center px-4">
        <div className="w-full flex justify-between items-center">
          <span className="font-bold text-2xl text-text">Jason Lieb</span>
          <button
            className="sm:hidden text-text"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className={`${isOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row items-center absolute sm:static top-[4.5rem] left-0 right-0 bg-background sm:bg-transparent p-4 sm:p-0`}>
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
