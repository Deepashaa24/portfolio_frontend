import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { fetchProjects } from '../services/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Static projects data
  const staticProjects = [
    {
      _id: '1',
      title: 'World Countries Data Visualization',
      description: 'Interactive web application to display data of various countries. Implemented real-time search and filtering features. Focused on DOM manipulation and dynamic UI updates.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=500&h=300&fit=crop',
      projectLink: '',
      githubLink: 'https://github.com/Deepashaa24'
    },
    {
      _id: '2',
      title: 'Mini E-Commerce Platform',
      description: 'Frontend e-commerce website with user and shopkeeper modules. Supports product listing and basic cart interaction. Built to understand application flow and UI behavior.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop',
      projectLink: '',
      githubLink: 'https://github.com/Deepashaa24'
    },
    {
      _id: '3',
      title: 'Quiz Application',
      description: 'MCQ-based quiz application with automatic score calculation. User scores are stored using browser localStorage. Strengthened logic building and event handling skills.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=500&h=300&fit=crop',
      projectLink: '',
      githubLink: 'https://github.com/Deepashaa24'
    },
    {
      _id: '4',
      title: 'Weather Application',
      description: 'Displays real-time weather information based on city search. Uses Fetch API to retrieve weather data. Improved understanding of APIs and asynchronous JavaScript.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
      imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop',
      projectLink: '',
      githubLink: 'https://github.com/Deepashaa24'
    },
    {
      _id: '5',
      title: 'To-Do List Application',
      description: 'Task management app to add, remove, and manage daily tasks. Updates tasks dynamically using DOM manipulation. Helps practice basic UI-based data operations.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop',
      projectLink: '',
      githubLink: 'https://github.com/Deepashaa24'
    },
    {
      _id: '6',
      title: 'Amazon Clone (Frontend)',
      description: 'Amazon-inspired responsive landing page design. Includes navbar, product sections, and UI interactions. Focused on layout design and frontend structure.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=500&h=300&fit=crop',
      projectLink: '',
      githubLink: 'https://github.com/Deepashaa24'
    },
    {
      _id: '7',
      title: 'Period Tracker Application',
      description: 'Web-based MERN stack application to record and manage menstrual cycle information. Implements backend APIs and database integration for data storage. Helped gain understanding of full-stack development workflow.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=300&fit=crop',
      projectLink: '',
      githubLink: 'https://github.com/Deepashaa24'
    }
  ];

  useEffect(() => {
    const getProjects = async () => {
      try {
        setLoading(true);
        const data = await fetchProjects();
        // If API returns projects, use them; otherwise use static projects
        if (data && data.length > 0) {
          setProjects(data);
        } else {
          setProjects(staticProjects);
        }
      } catch (err) {
        // If API fails, use static projects
        setProjects(staticProjects);
        console.log('Using static projects data');
      } finally {
        setLoading(false);
      }
    };

    getProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-300">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid - 1 column on mobile, 2 on tablets, 3 on desktop */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No projects found. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
