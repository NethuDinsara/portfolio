import { useEffect, useRef } from 'react';
import meStand from '../assets/images/meStand.png'

const About = () => {
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

  return (
    <section id="about" className="about">
      <div className="about-container fade-in" ref={sectionRef}>
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm a passionate software engineer and designer with a strong interest in building 
              intuitive, user-friendly applications. My journey in tech began when I first discovered 
              the power of coding to create solutions that can make a difference.
            </p>
            <p>
              I'm currently pursuing my degree in Computer Science, focusing on software development 
              and UI/UX design. I love combining my technical skills with my creative side to build 
              beautiful and functional applications.
            </p>
            <p>
              When I'm not coding, you'll find me volunteering for tech education initiatives, 
              participating in hackathons, or exploring the latest design trends. I'm always eager 
              to learn new technologies and apply them to solve real-world problems.
            </p>
          </div>
          <div className="about-image">
            {/* <div className="image-frame">
              <img src={meStand} alt="About Me" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;