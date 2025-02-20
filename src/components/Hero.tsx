import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Growth Hacker
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            En recherche d'alternance • Passionné par digital marketing et growth hacking 
          </p>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Edgo74/" target="_blank" rel="noopener noreferrer" 
               className="transform hover:scale-110 transition-transform">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/adam-bayar/" target="_blank" rel="noopener noreferrer"
               className="transform hover:scale-110 transition-transform">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:adambayar1357@gmail.com"
               className="transform hover:scale-110 transition-transform">
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;