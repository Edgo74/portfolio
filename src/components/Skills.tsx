import React from 'react';
import { Code2, Briefcase, GraduationCap } from 'lucide-react';

const Skills = () => {
  const skills = {
    frontend: ["React", "TypeScript", "TailwindCSS", "Bootstrap"],
    backend: [ "PHP", "Symfony", "Node.js",  "PostgreSQL", "MySQL", "MongoDB", "REST API"],
    tools: ["Git", "Docker", "Webpack", "CI/CD"]
  };

  return (
    <section id="competences" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Compétences & Formation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Code2 className="w-6 h-6 mr-2 text-blue-400" />
              <h3 className="text-xl font-bold">Frontend</h3>
            </div>
            <ul className="space-y-2">
              {skills.frontend.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Briefcase className="w-6 h-6 mr-2 text-purple-400" />
              <h3 className="text-xl font-bold">Backend</h3>
            </div>
            <ul className="space-y-2">
              {skills.backend.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <GraduationCap className="w-6 h-6 mr-2 text-green-400" />
              <h3 className="text-xl font-bold">Outils & DevOps</h3>
            </div>
            <ul className="space-y-2">
              {skills.tools.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 bg-gray-800/50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Parcours</h3>
          <div className="space-y-6">
            <div className="flex">
              <div className="flex-shrink-0 w-24 text-gray-400">2024</div>
              <div>
                <h4 className="font-semibold">Formation Développeur Full Stack Bachelor Bac +3 (en cours)</h4>
                <p className="text-gray-400">ISCOD</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 text-gray-400">2023</div>
              <div>
                <h4 className="font-semibold">Stage Développeur web</h4>
                <p className="text-gray-400">1 Adomicile</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 text-gray-400">2021</div>
              <div>
                <h4 className="font-semibold">Formation Développeur Bac +2</h4>
                <p className="text-gray-400">Studi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;