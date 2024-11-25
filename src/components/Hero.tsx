import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Ingeniero en Informática
              <span className="block text-indigo-600 mt-2">Desarrollador Full Stack</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Especializado en desarrollo de sistemas y soluciones tecnológicas innovadoras.
              Experiencia en Spring Boot, Flutter, Angular y React.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Contactar
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                Ver Proyectos
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
              alt="Developer workspace"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-sm font-medium text-gray-600">Más de 5 años de experiencia</p>
              <p className="text-indigo-600 font-bold">Desarrollo de Software</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}