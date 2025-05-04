import { useState, useEffect, useRef } from 'react';
import GreenAura from '../assets/images/GrAu.png'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Babble-app",
      description: "A digitalized mobile platform for kids with speaking challenges inlcuding features such as flashcards, progress predictive models, scenario building",
      technologies: ["React Native", "Node.js", "MongoDB", "ML integrations"],
      image: "/api/placeholder/400/250",
      category: "software",
      link: "#"
    },
    {
      id: 2,
      title: "Green Aura UI UX",
      description: "A responsive task management application with drag-and-drop functionality, filters, and team collaboration features.",
      technologies: ["React", "Redux", "Firebase", "TailwindCSS"],
      image: GreenAura,
      category: "design",
      link: "https://www.figma.com/proto/ULtFkhBBVdJrZ9qC5BLBFS/IX-097_The-UXperts?node-id=227-718&starting-point-node-id=208%3A693&t=b6IDa5VIfy6GCv2z-1"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "An interactive weather dashboard showing current conditions and forecasts using third-party API integration.",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js", "HTML/CSS"],
      image: "/api/placeholder/400/250",
      category: "software",
      link: "#"
    },
    {
      id: 4,
      title: "Mobile App UI Design",
      description: "A comprehensive UI design for a fitness tracking mobile application with user-friendly interface and visual elements.",
      technologies: ["Figma", "Adobe Illustrator", "UI/UX Principles"],
      image: "/api/placeholder/400/250",
      category: "design",
      link: "#"
    },
    {
      id: 5,
      title: "Brand Identity Design",
      description: "Complete brand identity design including logo, color palette, typography, and brand guidelines for a tech startup.",
      technologies: ["Adobe Illustrator", "Photoshop", "Brand Strategy"],
      image: "/api/placeholder/400/250",
      category: "design",
      link: "#"
    },
    {
      id: 6,
      title: "Web Application Redesign",
      description: "Redesign of an existing web application to improve user experience, accessibility, and visual appeal.",
      technologies: ["Figma", "User Research", "Wireframing", "Prototyping"],
      image: "/api/placeholder/400/250",
      category: "design",
      link: "#"
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="projects">
      <div className="projects-container fade-in" ref={sectionRef}>
        <h2 className="section-title">My Projects</h2>
        
        <div className="project-filter">
          <button 
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'software' ? 'active' : ''}`}
            onClick={() => setActiveCategory('software')}
          >
            Software
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'design' ? 'active' : ''}`}
            onClick={() => setActiveCategory('design')}
          >
            Design
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              className="project-card" 
              key={project.id}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} className="btn-view">View Project</a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech, i) => (
                    <span className="tech-tag" key={i}>{tech}</span>
                  ))}
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
