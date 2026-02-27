import type { Project as ProjectType } from '../types'
import Project from '../components/Project'

const projects: ProjectType[] = [
  {
    title: 'Train Smart',
    description:
      'A cross-platform fitness tracking app with web and mobile versions for logging workouts, tracking progress, and managing exercises.',
    image: 'train-smart.webp',
    alt: 'Train Smart fitness tracking app screenshot',
    technologies: ['TypeScript', 'React', 'React Native', 'Vite', 'Tailwind', 'Zustand', 'Dexie'],
    repo: 'https://github.com/jason-lieb/train-smart',
  },
  {
    title: 'Browser Interface',
    description:
      'A chromium-based extension that saves tabs as markdown to your filesystem to manage them.',
    image: 'browser-interface.webp',
    alt: 'Browser Interface screenshot',
    technologies: ['Typescript', 'React', 'Vite', 'Pico.CSS', 'Chrome Manifest V3'],
    repo: 'https://github.com/jason-lieb/Browser-Interface',
    deploy:
      'https://chromewebstore.google.com/detail/browser-interface/eciohhdfhkkihkiiefldkejohdoghogo',
  },
  {
    title: 'Obsidian Plugin',
    description:
      'An obsidian plugin that pairs with a chrome extension to manage your tabs in obsidian.',
    image: 'obsidian-browser-interface-plugin.webp',
    alt: 'Obsidian Browser Interface Plugin screenshot',
    technologies: ['Typescript', 'OOP'],
    repo: 'https://github.com/jason-lieb/Browser-Interface',
    deploy: 'https://obsidian.md/plugins?id=browser-interface',
  },
  {
    title: 'Rhythm Room',
    description:
      'A full-stack MERN web application to create and share playlists using Spotify and OpenAI APIs',
    image: 'rhythm-room.webp',
    alt: 'Rhythm Room screenshot',
    technologies: [
      'React',
      'NodeJS',
      'Express',
      'MongoDB',
      'GraphQL',
      'Heroku',
      'Spotify API',
      'OpenAI API',
      'Material UI',
    ],
    repo: 'https://github.com/jason-lieb/Rhythm-Room',
  },
  {
    title: 'Browse Smart',
    description:
      'A Chrome Extension that creates a pinned tab in each window and syncs with a background service worker to display open tabs and allow the user to delete or sleep tabs for organization and speed. Published on the Chrome Web Store.',
    image: 'browse-smart.webp',
    alt: 'Browse Smart screenshot',
    technologies: ['Svelte', 'Vite', 'Pico.CSS', 'Chrome Manifest V3'],
    repo: 'https://github.com/jason-lieb/Browse-Smart',
  },
  {
    title: 'Fiesta Collector',
    description:
      'An inventory application for collections of Art Deco style dinnerware using Express and MySQL',
    image: 'fiesta-collector.webp',
    alt: 'Collection of fiestaware',
    technologies: ['NodeJS', 'Express', 'MySQL', 'Handlebars', 'Tailwind', 'Heroku'],
    repo: 'https://github.com/jason-lieb/Fiesta-Collector',
  },
  {
    title: 'Stock Visualizer',
    description:
      'A single page application that shows historical data for popular stocks, currency exchange rates, and US government data',
    image: 'stock-visualizer.webp',
    alt: 'Stock chart on computer',
    technologies: ['React', 'Bootstrap', 'Vite', 'React Query', 'Google Charts'],
    repo: 'https://github.com/jason-lieb/Stock-Visualizer',
  },
]

export default function Portfolio() {
  return (
    <main className="min-h-[calc(100vh-10.5rem)] py-4">
      {projects.map((project, index) => (
        <Project key={project.title} index={index} {...project} />
      ))}
    </main>
  )
}
