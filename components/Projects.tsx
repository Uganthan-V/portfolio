import React from 'react';
import Section from './Section';
import { PROJECTS, Project } from '../constants';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div 
            className="bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg shadow-cyan-500/10 transition-transform duration-300 hover:scale-105 hover:shadow-cyan-500/20 group flex flex-col"
        >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity" />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="bg-gray-800 text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
                    ))}
                </div>
                <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-gray-800">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors font-semibold">GitHub</a>
                    {project.liveUrl && (
                         <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-md hover:bg-cyan-400 hover:text-black transition-all duration-300 text-sm font-semibold">Live Demo</a>
                    )}
                </div>
            </div>
        </div>
    )
}

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="My Projects">
      <div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;