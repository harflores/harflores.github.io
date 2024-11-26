import { Github, Globe, Code } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
}

const projects: ProjectProps[] = [
  {
    title: 'Portfolio Personal',
    description: 'Sitio web personal desarrollado con React y TypeScript, implementando diseño responsivo y animaciones modernas.',
    image: 'src/assets/projects/portfolio.png',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    demoLink: 'https://harflores.github.io/',
    codeLink: 'https://github.com/harflores/harflores.github.io'
  },
  {
    title: 'Danich',
    description: 'Optimización y posicionamiento web con tecnicas SEO e implementación de metricas con Google Analytics',
    image: 'src/assets/projects/danich.png',
    technologies: ['Wordpress', 'Elementor', 'Google Analytics', 'SEO'],
    demoLink: 'https://danich.com/',
    codeLink: '#'
  },
  {
    title: 'Campobello',
    description: 'Optimización y posicionamiento web con tecnicas SEO e implementación de metricas con Google Analytics',
    image: 'src/assets/projects/danich.png',
    technologies: ['Wordpress', 'Elementor', 'Google Analytics', 'SEO'],
    demoLink: 'https://campobello.cl/',
    codeLink: '#'
  },
//   {
//     title: 'App Móvil',
//     description: 'Aplicación móvil multiplataforma para seguimiento de actividades físicas y rutinas de ejercicio.',
//     image: '/ruta/app.jpg',
//     technologies: ['Flutter', 'Firebase', 'Google Maps API'],
//     demoLink: 'https://demo.proyecto3.com',
//     codeLink: 'https://github.com/usuario/proyecto3'
//   },
  // Más proyectos...
];

export default function Project() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Proyectos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              {/* Imagen del proyecto */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Contenido del proyecto */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                </div>

                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Enlaces */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    <Globe className="h-5 w-5" />
                    <span>Demo</span>
                  </a>
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span>Código</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 