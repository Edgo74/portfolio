import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, GraduationCap, ChevronDown } from 'lucide-react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer className="bg-gray-900 py-6 text-center text-gray-400">
        <p>© {new Date().getFullYear()} - Développé avec passion</p>
      </footer>
    </div>
  );
}

export default App;