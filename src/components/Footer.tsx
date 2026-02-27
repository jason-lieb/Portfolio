import Github from '../assets/icons/Github'
import LinkedIn from '../assets/icons/LinkedIn'
import ReactIcon from '../assets/icons/React'
import Tailwind from '../assets/icons/Tailwind'

export default function Footer() {
  return (
    <footer className="h-24 flex items-center">
      <div className="w-full px-4">
        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <h5 className="mx-2 text-accent text-base">Connect</h5>
            <div className="flex">
              <a
                href="https://github.com/jason-lieb"
                target="_blank"
                rel="noreferrer"
                className="m-1 text-text hover:text-accent"
              >
                <Github className="w-12 fill-current" />
              </a>
              <a
                href="https://www.linkedin.com/in/jasonlieb/"
                target="_blank"
                rel="noreferrer"
                className="m-1 text-text hover:text-accent"
              >
                <LinkedIn className="w-12 fill-current" />
              </a>
            </div>
          </div>
          <h6 className="text-accent text-sm">© {new Date().getFullYear()} Jason Lieb</h6>
          <div className="flex flex-col items-end">
            <h5 className="mx-2 text-accent text-base">Built with</h5>
            <div className="flex">
              <div className="m-1">
                <ReactIcon className="w-12" />
              </div>
              <div className="m-1">
                <Tailwind className="w-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
