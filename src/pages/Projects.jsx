import React from 'react';
import './Projects.css';

const projectData = [
  {
    title: 'Fitness App',
    description: 'A fitness tracker with workout plans, diet logging, and progress visualization.',
    image: '/src/assets/devimage.jpg',
    link: 'https://yourapp.com/fitness',
  },
  {
    title: 'Haptic Video Generator',
    description: 'Automatically generates synced haptic feedback for videos using AI.',
    image: 'src/assets/project1.jpeg',
    link: 'https://yourapp.com/haptics',
  },
  {
    title: 'Traffic Analysis',
    description: 'A real-time traffic analytics dashboard using live map and AI predictions.',
    image: 'src/assets/project1.jpeg',
    link: 'https://yourapp.com/traffic',
  },
  {
    title: 'SDN DDoS Detection',
    description: 'Detects and mitigates DDoS attacks on software-defined networks in real-time.',
    image: '/src/assets/devimage.jpg',
    link: 'https://yourapp.com/ddos',
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projectData.map((project, index) => (
          <div key={index} className="project-row">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
