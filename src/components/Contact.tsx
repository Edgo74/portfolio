import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900 rounded-lg p-8">
            <p className="text-center text-xl mb-8">
              Je suis actuellement à la recherche d'une alternance en développement web.
              N'hésitez pas à me contacter pour discuter d'opportunités !
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="mailto:adambayar1357@gmail.com"
                className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Mail className="w-8 h-8 mb-2 text-blue-400" />
                <span className="text-sm">adambayar1357@gmail.com</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/adam-bayar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-8 h-8 mb-2 text-blue-400" />
                <span className="text-sm">LinkedIn</span>
              </a>
              
              <a
                href="https://github.com/Edgo74/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Github className="w-8 h-8 mb-2 text-blue-400" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;