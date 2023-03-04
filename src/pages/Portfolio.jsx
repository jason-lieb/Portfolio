import Project from '../components/Project'

export default function Portfolio() {
  const projects = [
    {
      title: 'Stock Visualizer',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est perspiciatis repellat in qui necessitatibus expedita odio, ab dicta inventore iste. Eius et ratione enim minima tempore magnam aliquid voluptas ab!',
      image: 'stock-visualizer.jpg',
      alt: 'Stock chart on computer',
    },
    {
      title: 'Fiesta Collector',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est perspiciatis repellat in qui necessitatibus expedita odio, ab dicta inventore iste. Eius et ratione enim minima tempore magnam aliquid voluptas ab!',
      image: 'fiesta-collector.jpg',
      alt: 'Collection of fiestaware',
    },
  ]
  return (
    <div className="page">
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          alt={project.alt}
        />
      ))}
    </div>
  )
}
