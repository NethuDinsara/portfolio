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
        description: "Got the opportunity to held the role of Director of Social Media & Content Strategy in an islandwide motor fest called Sundown Motor Fest 2025, where I managed the social media platforms and made the PR strategies and plans.",
        // image: "/api/placeholder/300/200"
      },
      {
        id: 2,
        title: "Dancer - Finalist",
        organization: "Stage Craft , IIT",
        period: "Mar 2024",
        description: "Active member of team NAACH a well known dancing team in Informatics Institute of Technology and got the chance to be the finalists in Annual Talent fest called Stage Craft",
        // image: "/api/placeholder/300/200"
      },
      {
        id: 3,
        title: "Secretary - English Literary Association",
        organization: "Sirimavo Bandaranayake Vidyalaya, Colombo",
        period: "2020 - 2023",
        description: "Got the opportunity to handle the secretariet work at English Literary Association at Sirimawo Bandaranayake Vidyalaya,Colombo",
        // image: "/api/placeholder/300/200"
      },
      {
        id: 4,
        title: "Batch Representative",
        organization: "Rotaract Club of IIT",
        period: "Sep 2024 - Feb 2025",
        description: "Handled and managed batch's issues and navigated those with the management and the lecturers at university, Worked as the representative of the batch",
        // image: "/api/placeholder/300/200"
      },
      {
        id: 5,
        title: "Senior Prefect",
        organization: "Sujatha Vidyalaya, Nugegoda",
        period: "2018 - 2019",
        description: "Improved leadership skills, learned to manage difficult tasks, Teamwork, Handled school students' needs and navigated with the management",
        // image: "/api/placeholder/300/200"
      }
    ],
    volunteering: [
      {
        id: 1,
        title: "Membership Chairperson",
        organization: "Leo Club of Homagama Central",
        period: "Aug 2024 - Present",
        description: "Volunteered as the Membership Chairperson for the Leo Club of Homagama Central to support new members with their issues, handling General Meetings, Ensuring Membership growth,etc;",
        // image: "/api/placeholder/300/200"
      },
      {
        id: 2,
        title: "Public Relations Team",
        organization: "AIESEC of IIT",
        period: "Aug 2024 - Feb 2025",
        description: "Volunteered as the Public Relations Team member in AIESEC of IIT giving suggessions and designs when needed for the public reachout",
        // image: "/api/placeholder/300/200"
      },
      {
        id: 3,
        title: "Member",
        organization: "Rotaract Club of IIT",
        period: "Sep 2023 - Feb 2023",
        description: "Volunteered as an acitve member of the Rotaract Club of IIT",
        // image: "/api/placeholder/300/200"
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
                {/* <div className="activity-image">
                  <img src={activity.image} alt={activity.title} />
                </div> */}
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