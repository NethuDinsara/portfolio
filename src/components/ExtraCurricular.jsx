import { useState, useEffect, useRef } from 'react';

const ExtraCurricular = () => {
  const [activeTab, setActiveTab] = useState('extracurricular');
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

  const activities = {
    extracurricular: [
      {
        id: 1,
        title: "Director of Social Media & Content Strategy",
        organization: "Sundown Motor Fest 25 - Leo Club of Homagama Central",
        period: "February 2025",
        description: "Participated in a 48-hour hackathon where my team developed a sustainability tracking application that won the 'Most Innovative Solution' award.",
        image: "/api/placeholder/300/200"
      },
      {
        id: 2,
        title: "Dancer - Finalist",
        organization: "Stage Craft , IIT",
        period: "Sep 2023 - Feb 2023",
        description: "Active member of the university's Women in Tech club, participating in workshops, mentorship programs, and networking events.",
        image: "/api/placeholder/300/200"
      },
      {
        id: 3,
        title: "Secretary - English Literary Association",
        organization: "Sirimavo Bandaranayake Vidyalaya, Colombo",
        period: "2020 - 2023",
        description: "Reached the semifinals in a national coding competition, solving complex algorithmic problems under time constraints.",
        image: "/api/placeholder/300/200"
      },
      {
        id: 4,
        title: "Batch Representative",
        organization: "Rotaract Club of IIT",
        period: "Sep 2024 - Feb 2025",
        description: "Designed and developed a new website for a local animal shelter to improve their online presence and streamline the adoption process.",
        image: "/api/placeholder/300/200"
      },
      {
        id: 5,
        title: "Senior Prefect",
        organization: "Sujatha Vidyalaya, Nugegoda",
        period: "2018 - 2019",
        description: "Designed and developed a new website for a local animal shelter to improve their online presence and streamline the adoption process.",
        image: "/api/placeholder/300/200"
      }
    ],
    volunteering: [
      {
        id: 1,
        title: "Membership Chairperson",
        organization: "Leo Club of Homagama Central",
        period: "Aug 2024 - Present",
        description: "Volunteered as an instructor for an 8-week program teaching middle school girls the fundamentals of programming and web development.",
        image: "/api/placeholder/300/200"
      },
      {
        id: 2,
        title: "Public Relations Team",
        organization: "AIESEC of IIT",
        period: "Aug 2024 - Feb 2025",
        description: "Conduct monthly workshops for senior citizens on using technology for everyday tasks, improving digital literacy in the community.",
        image: "/api/placeholder/300/200"
      },
      {
        id: 3,
        title: "Member",
        organization: "Informatics Institute of Technology",
        period: "Sep 2023 - Feb 2023",
        description: "Designed and developed a new website for a local animal shelter to improve their online presence and streamline the adoption process.",
        image: "/api/placeholder/300/200"
      }
    ]
  };

  return (
    <section id="activities" className="activities">
      <div className="activities-container fade-in" ref={sectionRef}>
        <h2 className="section-title">Activities & Volunteering</h2>
        
        <div className="tab-container">
          <div className="tabs">
            <button 
              className={`tab-btn ${activeTab === 'extracurricular' ? 'active' : ''}`}
              onClick={() => setActiveTab('extracurricular')}
            >
              Extracurricular
            </button>
            <button 
              className={`tab-btn ${activeTab === 'volunteering' ? 'active' : ''}`}
              onClick={() => setActiveTab('volunteering')}
            >
              Volunteering
            </button>
          </div>
          
          <div className="tab-content">
            {activities[activeTab].map((activity, index) => (
              <div 
                className="activity-card" 
                key={activity.id}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="activity-image">
                  <img src={activity.image} alt={activity.title} />
                </div>
                <div className="activity-info">
                  <h3>{activity.title}</h3>
                  <div className="activity-meta">
                    <span className="organization">{activity.organization}</span>
                    <span className="period">{activity.period}</span>
                  </div>
                  <p>{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraCurricular;