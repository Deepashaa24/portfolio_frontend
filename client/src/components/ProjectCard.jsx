import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-700">
      {/* Project Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={project.imageUrl || 'https://via.placeholder.com/400x300'}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="font-heading text-2xl font-bold text-white mb-3 tracking-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies && project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-900/50 text-blue-300 text-sm rounded-full font-medium border border-blue-800"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6">
          {project.projectLink && (
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              Live Demo
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-gray-900 transition-colors duration-300"
            >
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
