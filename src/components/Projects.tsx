import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import garage  from "../../assets/garage-p.png";
import emoji from "../../assets/emojis-site.png";
import portfolio from "../../assets/portfolio-img.png";
const Projects = () => {
  const projects = [
    {
      title: "Platform garagiste",
      description: "Application de présentation de services et véhicules d'occasion avec gestion de contenu, filtres de recherche, et contact. Développée en PHP/MySQL, déployée sur Heroku.",
      image: garage,
      technologies: ["PHP", "Javascript", "MySQL", "HTML", "CSS"],
      githubLink: "https://github.com/Edgo74/ecf_garage_v_parrot",
      liveLink: "https://app-ecf-garage-3d639a49eac3.herokuapp.com/#"
    },
    {
      title: "Emoji Personnality",
      description: "Application React où les utilisateurs sélectionnent des emojis pour exprimer leurs émotions, envoyés à l'API d'OpenAI pour un profil de personnalité personnalisé.",
      image: emoji,
      technologies: ["React", "Node.js", "OPENAI", "CSS"],
      githubLink: "https://github.com/Edgo74/emoji-personnality",
      liveLink: "https://your-emoji-personnality.netlify.app/"
    },
    {
      title: "Mon Portfolio",
      description: "Mon portfolio en ligne développé avec React et TailwindCSS. Design minimaliste et responsive.",
      image: portfolio,
      technologies: ["React", "Node.js", "Typescript", "TailwindCSS"],
      githubLink: "https://github.com/Edgo74/portfolio",
      liveLink: "https://portfolio-adam-me.netlify.app/"
    }
  ];
  
  return (
    <section id="projets" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Mes Projets</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a href={project.githubLink} className="flex items-center text-gray-400 hover:text-white">
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a href={project.liveLink} className="flex items-center text-gray-400 hover:text-white">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;