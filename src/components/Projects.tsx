// pages/Projects.tsx
import React, { useState } from 'react';
import ProjectCard from './Projectcard';
import { FiSearch } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  link?: string;
}

const ProjectsSection: React.FC = () => {
  // Sample project data
  const projects: Project[] = [
    {
      id: 1,
      title: "Cramm Notes Sharing Platform",
      description: "A modern web application that helps users create effective AI system prompts with intelligent...",
      image: "/src/assets/cramm.jpeg",
      category: "AI",
      link: "/projects/system-prompt-generator"
    },
    {
      id: 2,
      title: "Lecture Buddy",
      description: "LumeAI is a cutting-edge AI-powered chat application featuring advanced conversation...",
      image: "/api/placeholder/600/300",
      category: "AI Chat",
      link: "/projects/lumeai"
    },
    {
      id: 3,
      title: "Medium clone",
      description: "A modern Pomodoro timer application with an integrated Kanban task board, built with Next.js...",
      image: "/api/placeholder/600/300",
      category: "Productivity",
      link: "/projects/pomodoro-task-manager"
    },
    {
      id: 4,
      title: "Biteezy",
      description: "A robust admin dashboard for Rotaract Galgotias, built with Next.js and PostgreSQL...",
      image: "/api/placeholder/600/300",
      category: "Admin Panel",
      link: "/projects/rotaract-admin"
    }
  ];

  const [search, setSearch] = useState('');
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(search.toLowerCase()) ||
    project.description.toLowerCase().includes(search.toLowerCase()) ||
    project.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold mb-2">Projects</h1>
      <p className="text-gray-400 mb-8 text-lg max-w-2xl">Crafting memorable digital experiences.</p>
      <div className="mb-10 flex items-center gap-2 w-full max-w-md">
        <div className="relative w-full">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            <FiSearch />
          </span>
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded bg-[#18181b] border border-[#232329] text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              category={project.category}
              link={project.link}
            />
          ))
        ) : (
          <div className="col-span-2 text-center text-gray-400 py-12">No projects found.</div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;