import Project from '../components/Project'

export default function Portfolio() {
  const projects = [
    {
      title: 'Browser Hero',
      description:
        'A Svelte chrome extension designed to manage tabs to improve computer performance and ease organization',
      image: 'browser-hero.png',
      alt: 'Browser Hero screenshot',
      technologies: ['Svelte', 'Pico.CSS', 'Vite'],
      repo: 'https://github.com/jason-lieb/Browser-Hero',
      deploy: '',
      extension: true,
    },
    {
      title: 'Stock Visualizer',
      description:
        'An SPA that shows historical data for popular stocks, currency exchange rates, and US government data',
      image: 'stock-visualizer.jpg', // image available under Creative Commons at https://commons.wikimedia.org/wiki/File:Blur-chart-data-69760.jpg
      alt: 'Stock chart on computer',
      technologies: ['React', 'Bootstrap', 'Vite', 'Google Charts'],
      repo: 'https://github.com/jason-lieb/Stock-Visualizer',
      deploy: 'https://jason-lieb.github.io/Stock-Visualizer/',
    },
    {
      title: 'Fiesta Collector',
      description:
        'An inventory application for collections of Art Deco style dinnerware using Express and MySQL',
      image: 'fiesta-collector.jpg', // image available under Creative Commons at https://commons.wikimedia.org/wiki/File:Fiesta_at_Macys_in_East_Wenatchee.jpg
      alt: 'Collection of fiestaware',
      technologies: [
        'NodeJS',
        'Express',
        'MySQL',
        'Handlebars',
        'Tailwind',
        'Heroku',
      ],
      repo: 'https://github.com/jason-lieb/Fiesta-Collector',
      deploy: 'https://fiesta-collector.herokuapp.com/',
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
