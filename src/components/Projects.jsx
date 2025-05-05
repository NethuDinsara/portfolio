import { useState, useEffect, useRef } from 'react';
import GreenAura from '../assets/images/GrAu.png'
import Alpha from '../assets/images/alpha.png'

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
      technologies: ["React Native", "Node.js", "MongoDB", "ML integrations","Firebase"],
      image: "/api/placeholder/400/250",
      category: "software",
      link: "#"
    },
    {
      id: 2,
      title: "Green Aura UI UX",
      description: "A responsive task management application with drag-and-drop functionality, filters, and team collaboration features.",
      technologies: ["React", "Redux",  "TailwindCSS"],
      image: GreenAura,
      category: "design",
      link: "https://www.figma.com/proto/ULtFkhBBVdJrZ9qC5BLBFS/IX-097_The-UXperts?node-id=227-718&starting-point-node-id=208%3A693&t=b6IDa5VIfy6GCv2z-1"
    },
    {
      id: 3,
      title: "Alpha Medi Lab Landing Page",
      description: "An interactive marketing page for a medical laboratory to show the relevant packages,their portfolio ,services and testamonials",
      technologies: ["JavaScript", "React", "HTML/CSS"],
      image: Alpha,
      category: "software",
      link: "#"
    },
    {
      id: 4,
      title: "Real Time Ticketing System",
      description: "A fullstack real time ticketing system including a ticketbooth and for vendors and customers",
      technologies: ["SpringBoot","Angular","OOP","MySQL"],
      image: "/api/placeholder/400/250",
      category: "Software",
      link: "#"
    },
    {
      id: 5,
      title: "Sustainable Development Goals Website",
      description: "Complete Sustainalbe Development Goals related website for awareness,including main sitemaps and etc;",
      technologies: ["HTML","CSS","JS"],
      image: "/api/placeholder/400/250",
      category: "software",
      link: "#"
    },
    {
      id: 6,
      title: "Plane Ticketing Management System",
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
