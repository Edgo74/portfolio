import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl">
            Portfolio Adam Bayar
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#accueil" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Accueil</a>
              <a href="#projets" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Projets</a>
              <a href="#competences" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Compétences</a>
              <a href="#contact" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#accueil" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Accueil</a>
            <a href="#projets" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Projets</a>
            <a href="#competences" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Compétences</a>
            <a href="#contact" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;