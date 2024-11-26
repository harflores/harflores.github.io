import React from 'react';
import { Menu, X, Code2, Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">Harold Flores Suazo.</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">Sobre mí</a>
            <a href="#experience" className="text-gray-600 hover:text-indigo-600 transition-colors">Experiencia</a>
            <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition-colors">Habilidades</a>
            <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition-colors">Proyectos</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contacto</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com/harflores/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/harflores/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:harflores.cl@gmail.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col gap-4">
              <a href="#about" className="text-gray-600" onClick={toggleMenu}>Sobre mí</a>
              <a href="#experience" className="text-gray-600" onClick={toggleMenu}>Experiencia</a>
              <a href="#skills" className="text-gray-600" onClick={toggleMenu}>Habilidades</a>
              <a href="#projects" className="text-gray-600" onClick={toggleMenu}>Proyectos</a>
              <a href="#contact" className="text-gray-600" onClick={toggleMenu}>Contacto</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}