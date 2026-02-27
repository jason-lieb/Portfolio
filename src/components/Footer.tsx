import Github from '../assets/icons/Github'
import LinkedIn from '../assets/icons/LinkedIn'
import ReactIcon from '../assets/icons/React'
import Tailwind from '../assets/icons/Tailwind'

export default function Footer() {
  return (
    <footer className="h-24 flex items-center" role="contentinfo">
      <div className="w-full px-4">
        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <h5 className="mx-2 text-accent text-base">Connect</h5>
            <div className="flex">
              <a
                href="https://github.com/jason-lieb"
                target="_blank"
                rel="noreferrer"
                className="m-1 p-1 min-w-[44px] min-h-[44px] flex items-center justify-center text-text hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded"
                aria-label="GitHub profile"
              >
                <Github className="w-10 fill-current" />
              </a>
              <a
                href="https://www.linkedin.com/in/jasonlieb/"
                target="_blank"
                rel="noreferrer"
                className="m-1 p-1 min-w-[44px] min-h-[44px] flex items-center justify-center text-text hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded"
                aria-label="LinkedIn profile"
              >
                <LinkedIn className="w-10 fill-current" />
              </a>
            </div>
          </div>
          <h6 className="text-accent text-sm">© {new Date().getFullYear()} Jason Lieb</h6>
          <div className="flex flex-col items-end">
            <h5 className="mx-2 text-accent text-base">Built with</h5>
            <div className="flex" aria-label="Technologies used">
              <div className="m-1" aria-label="React">
                <ReactIcon className="w-12" />
              </div>
              <div className="m-1" aria-label="Tailwind CSS">
                <Tailwind className="w-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
