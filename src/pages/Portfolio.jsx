import Project from '../components/Project'

export default function Portfolio() {
  const projects = [
    {
      title: 'Stock Visualizer',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est perspiciatis repellat in qui necessitatibus expedita odio, ab dicta inventore iste. Eius et ratione enim minima tempore magnam aliquid voluptas ab!',
      image: 'stock-visualizer.jpg',
      alt: 'Stock chart on computer',
      technologies: ['React', 'Bootstrap', 'Vite', 'Google Charts'],
      repo: 'https://github.com/jason-lieb/Stock-Visualizer',
      deploy: 'https://jason-lieb.github.io/Stock-Visualizer/',
    },
    {
      title: 'Fiesta Collector',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est perspiciatis repellat in qui necessitatibus expedita odio, ab dicta inventore iste. Eius et ratione enim minima tempore magnam aliquid voluptas ab!',
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
        />
      ))}
    </main>
  )
}
