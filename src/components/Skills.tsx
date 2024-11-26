import { Code, Server, GitBranch, Users, Globe, Database, Terminal, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: 'Desarrollo Web',
    icon: Globe,
    skills: ['WordPress', 'JavaScript', 'SEO', 'HTML/CSS', 'React', 'Angular', 'Google SEO']
  },
  {
    title: 'Backend & Sistemas',
    icon: Server,
    skills: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'Amazon S3', 'Node.js']
  },
  {
    title: 'DevOps & Herramientas',
    icon: Terminal,
    skills: ['Git', 'Docker', 'JIRA', 'AWS', 'Linux', 'CI/CD']
  },
  {
    title: 'Desarrollo Móvil',
    icon: Code,
    skills: ['Flutter', 'React Native', 'Desarrollo iOS', 'Desarrollo Android']
  },
  {
    title: 'Gestión & Soporte',
    icon: Brain,
    skills: ['ITIL', 'Soporte Técnico', 'Hardware', 'Redes', 'Ofimática']
  },
  {
    title: 'Base de Datos',
    icon: Database,
    skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'Optimización']
  },
  {
    title: 'Control de Versiones',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'GitLab','Control de Versiones']
  },
  {
    title: 'Habilidades Blandas',
    icon: Users,
    skills: ['Trabajo en Equipo', 'Comunicación', 'Resolución de Problemas', 'Liderazgo', 'Metodologías Ágiles']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Habilidades Técnicas
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="h-6 w-6 text-indigo-600" />
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}