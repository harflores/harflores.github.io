import React from 'react';
import { Building2, Users, Phone, Settings } from 'lucide-react';

const experiences = [
  {
    title: 'Desarrollador Web y Sistemas',
    company: 'Danich',
    period: '2024 - Presente',
    description: 'En Danich, una empresa líder en la integración de proyectos intralogísticos automatizados en Latinoamérica, me desempeño como Desarrollador Web y Sistemas. Mi principal responsabilidad es mejorar la presencia del sitio web en buscadores mediante la implementación de estrategias de SEO y optimización del rendimiento. Trabajo en colaboración con equipos multidisciplinarios para desarrollar soluciones innovadoras que aumenten la productividad de nuestros clientes.',
    icon: Settings,
    skills: ['Auditorías de SEO', 'Optimización', 'Wordpress', 'JavaScript', 'MySQL', 'Amazon S3', 'Colaboración entre equipos']
  },
  {
    title: 'Gestor de soporte informático',
    company: 'Instituto Nacional de Estadísticas',
    period: '2024 - 2024',
    description: 'Proporcionar soporte informático al equipo operativo de la zona que se le asigne para asegurar el correcto funcionamiento de los dispositivos móviles de captura, computadores, impresoras, etc. tanto en la preparación como durante la recolección del proyecto Censo de Población y Vivienda 2024, a través del empleo de herramientas adecuadas, de acuerdo a la demanda, políticas y procedimientos institucionales.',
    icon: Building2,
    skills: ['Ofimática', 'Hardware', 'ITIL', 'Interviwer']
  },
  {
    title: 'Analista de Diseño y Desarrollo de Sistemas',
    company: 'ODEPA',
    period: '2023 - 2024',
    description: 'Desarrollo de sistemas y aplicaciones utilizando metodologías ágiles. Implementación de APIs Rest con Spring Boot, aplicaciones móviles con Flutter y reportes web con Angular.',
    icon: Building2,
    skills: ['Spring Boot', 'Flutter', 'Angular', 'APIs Rest', 'Metodologías Ágiles']
  },
  {
    title: 'Gestor de Soporte Informático',
    company: 'Instituto Nacional de Estadísticas de Chile',
    period: '2022 - 2023',
    description: 'Gestión y mantenimiento de infraestructura tecnológica durante el Censo 2024. Soporte técnico y implementación de soluciones para dispositivos móviles y equipos de cómputo.',
    icon: Users,
    skills: ['Soporte Técnico', 'Gestión de Dispositivos', 'Resolución de Problemas', 'Documentación Técnica']
  },
  {
    title: 'Ejecutivo de Servicio al Cliente',
    company: 'Claro Chile S.A.',
    period: '2021 - 2022',
    description: 'Atención y soporte técnico para servicios móviles y hogar. Mejora de experiencia del cliente y capacitación de personal en políticas empresariales.',
    icon: Phone,
    skills: ['Atención al Cliente', 'Soporte Técnico', 'Capacitación', 'Resolución de Conflictos']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Experiencia Profesional
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-3 mb-2">
                    <exp.icon className="h-6 w-6 text-indigo-600" />
                    <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                  </div>
                  <p className="text-indigo-600 font-medium">{exp.period}</p>
                  <p className="text-lg font-semibold mt-2">{exp.title}</p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-px bg-gray-200 -z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}