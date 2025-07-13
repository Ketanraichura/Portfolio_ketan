// components/ProjectCard.tsx
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  category, 
  link = "#" 
}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block group">
      <div className="bg-[#18181b] border border-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-gray-600 transition-all duration-200 flex flex-col h-full">
        {/* Project Image */}
        <div className="h-48 w-full overflow-hidden bg-[#101012] flex items-center justify-center">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>
        {/* Project Info */}
        <div className="flex-1 flex flex-col p-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-200 group-hover:text-white transition-colors">{title}</h3>
            <span className="text-xs px-2 py-1 bg-gray-800 rounded text-gray-300 font-mono">{category}</span>
          </div>
          <p className="text-gray-400 text-sm mb-4 flex-1">{description}</p>
          <div className="flex justify-end">
            <span className="inline-flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors font-medium">
              View Project <FiArrowUpRight className="inline-block" />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;