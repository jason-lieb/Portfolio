export interface Project {
  title: string
  description: string
  image: string
  alt: string
  technologies: string[]
  repo: string
  deploy?: string
}

export interface IconProps {
  className?: string
}
