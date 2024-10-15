import Project from '../components/Project'

export default function Portfolio() {
  const projects = [
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
      image: 'fiesta-collector.webp', // image available under Creative Commons at https://commons.wikimedia.org/wiki/File:Fiesta_at_Macys_in_East_Wenatchee.jpg
      alt: 'Collection of fiestaware',
      technologies: ['NodeJS', 'Express', 'MySQL', 'Handlebars', 'Tailwind', 'Heroku'],
      repo: 'https://github.com/jason-lieb/Fiesta-Collector',
    },
    {
      title: 'Stock Visualizer',
      description:
        'A single page application that shows historical data for popular stocks, currency exchange rates, and US government data',
      image: 'stock-visualizer.webp', // image available under Creative Commons at https://commons.wikimedia.org/wiki/File:Blur-chart-data-69760.jpg
      alt: 'Stock chart on computer',
      technologies: ['React', 'Bootstrap', 'Vite', 'React Query', 'Google Charts'],
      repo: 'https://github.com/jason-lieb/Stock-Visualizer',
    },
  ]
  return (
    <main className="page py-sm-4">
      {projects.map((project, index) => (
        <Project
          key={index}
          index={index}
          title={project.title}
          description={project.description}
          image={project.image}
          alt={project.alt}
          repo={project.repo}
          deploy={project.deploy}
          technologies={project.technologies}
          extension={project.extension}
        />
      ))}
    </main>
  )
}
