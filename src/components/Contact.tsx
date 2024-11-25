import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Reemplaza con tu Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Reemplaza con tu Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'harflores.cl@gmail.com',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY  // Reemplaza con tu Public Key
      );
      
      alert('¡Mensaje enviado con éxito!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Contacto
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">¿Tienes un proyecto en mente?</h3>
            <p className="text-gray-600 mb-8">
              Estoy disponible para proyectos freelance y oportunidades laborales.
              Contáctame para discutir cómo puedo ayudarte con tus necesidades de desarrollo.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-indigo-600" />
                <a href="mailto:harflores.cl@gmail.com" className="text-gray-600 hover:text-indigo-600">
                  harflores.cl@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-indigo-600" />
                <a href="tel:+56954327187" className="text-gray-600 hover:text-indigo-600">
                  +56 9 5432 7187
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-indigo-600" />
                <span className="text-gray-600">Curicó, Chile</span>
              </div>
            </div>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
            >
              {loading ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}