import { useEffect, useRef } from 'react';

const Skills = () => {
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

  const skills = [
    { category: "Programming Languages", items: ["JavaScript", "Python", "Java", "C++", "HTML5", "CSS3"] },
    { category: "Frameworks & Libraries", items: ["React.js", "Node.js", "Express", "Vue.js", "TailwindCSS", "Bootstrap"] },
    { category: "Tools & Technologies", items: ["Git", "GitHub", "VS Code", "Figma","Canva"] },
    { category: "Other Skills", items: ["UI/UX Design", "Responsive Design", "RESTful APIs", "Database Design", "Problem Solving", "Agile Methodology"] }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container fade-in" ref={sectionRef}>
        <h2 className="section-title">My Skills</h2>
        <div className="skills-content">
          {skills.map((skillGroup, index) => (
            <div className="skill-group" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
              <h3>{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((skill, i) => (
                  <div className="skill-item" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="skill-name">{skill}</div>
                    <div className="skill-bar">
                      <div className="skill-level" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
