import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with payment integration, product management, and user authentication.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, team collaboration features, and progress tracking.',
      technologies: ['React', 'Express', 'Socket.io', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with geolocation support, forecasts, and weather alerts using external APIs.',
      technologies: ['React', 'Weather API', 'Chart.js'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <div className="title-underline"></div>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
