import type { Project as ProjectType } from '../types'
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
import Typescript from '../assets/icons/Typescript'

interface ProjectProps extends ProjectType {
  index: number
}

const icons: Record<string, React.ComponentType<{ className?: string }> | undefined> = {
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
  TypeScript: Typescript,
  Zustand: undefined,
  Dexie: undefined,
  'React Native': ReactIcon,
}

function getImageUrl(imageName: string): string {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href
}

export default function Project({
  title,
  description,
  image,
  alt,
  technologies,
  repo,
  deploy,
  index,
}: ProjectProps) {
  const isEven = index % 2 === 0
  const textAlign = isEven ? 'text-right' : 'text-left'
  const selfAlign = isEven ? 'self-end' : 'self-start'

  return (
    <div className="py-4 px-4 md:px-12 max-w-4xl mx-auto">
      <div className="grid grid-cols-12 md:grid-cols-12 gap-0 relative">
        {/* Image */}
        <div
          className={`col-span-12 md:col-span-7 ${isEven ? 'md:col-start-1' : 'md:col-start-6'} row-start-1`}
        >
          <img
            src={getImageUrl(image)}
            alt={alt}
            className="w-full max-w-[600px] rounded-lg shadow-[0_0.5rem_1rem_rgba(52,152,219,0.5)]"
          />
        </div>

        {/* Content */}
        <div
          className={`col-span-12 md:col-span-7 ${isEven ? 'md:col-start-6' : 'md:col-start-1'} row-start-1 flex flex-col justify-center py-4 md:py-8 z-10`}
        >
          <h3 className={`text-accent text-xl font-semibold px-3 ${textAlign}`}>{title}</h3>
          <div className="bg-card rounded-lg p-4 shadow-[0_0.5rem_1rem_rgba(52,152,219,0.25)] mt-2">
            <p className="text-text mb-3">{description}</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => {
                const Icon = icons[tech]
                return (
                  <span key={tech} className="text-text text-sm flex items-center mr-2">
                    {Icon && <Icon className="w-5 mr-1" />}
                    {tech}
                  </span>
                )
              })}
            </div>
          </div>
          <div className={`flex gap-2 p-2 mt-2 ${selfAlign}`}>
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:text-text transition-colors"
            >
              <Github className="w-8 fill-current" />
            </a>
            {deploy && (
              <a
                href={deploy}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:text-text transition-colors"
              >
                <ExternalLink className="w-8 fill-current" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
