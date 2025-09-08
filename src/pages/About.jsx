"use client"
import React from "react"
import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"
import TeamCard from "../components/about/TeamCard"
import bg from "../assets/about-bg.jpeg"
import "./about.css"

const About = ({ onNavigate }) => {
  const [notification, setNotification] = React.useState(null)

  const showNotification = (message) => {
    setNotification(message)
    setTimeout(() => setNotification(null), 3000)
  }

  // Team members data
  const teamMembers = [
    {
      name: "John Mitchell",
      role: "CEO & Founder",
      experience: "25+ Years",
      image: "john-mitchell.jpg",
      skills: ["Leadership", "Strategy", "Innovation"],
      quote: "Building dreams into reality, one project at a time.",
      achievement: "Founder",
      social: {
        linkedin: "#",
        email: "john@constructandco.com",
      },
    },
    {
      name: "Sarah Chen",
      role: "Lead Architect",
      experience: "18+ Years",
      image: "sarah-chen.jpg",
      skills: ["Design", "Planning", "Sustainability"],
      quote: "Every structure tells a story of human ambition.",
      achievement: "LEED Certified",
      social: {
        linkedin: "#",
        email: "sarah@constructandco.com",
      },
    },
    {
      name: "Michael Rodriguez",
      role: "Project Manager",
      experience: "15+ Years",
      image: "michael-rodriguez.jpg",
      skills: ["Management", "Coordination", "Quality Control"],
      quote: "Excellence is in the details of execution.",
      achievement: "PMP Certified",
      social: {
        linkedin: "#",
        email: "michael@constructandco.com",
      },
    },
    {
      name: "Emily Johnson",
      role: "Interior Designer",
      experience: "12+ Years",
      image: "emily-johnson.jpg",
      skills: ["Interior Design", "Space Planning", "Color Theory"],
      quote: "Creating spaces that inspire and comfort.",
      achievement: "NCIDQ Certified",
      social: {
        linkedin: "#",
        email: "emily@constructandco.com",
      },
    },
    {
      name: "David Thompson",
      role: "Senior Engineer",
      experience: "20+ Years",
      image: "david-thompson.jpg",
      skills: ["Structural Engineering", "Safety", "Innovation"],
      quote: "Engineering solutions that stand the test of time.",
      achievement: "PE Licensed",
      social: {
        linkedin: "#",
        email: "david@constructandco.com",
      },
    },
    {
      name: "Lisa Wang",
      role: "Operations Director",
      experience: "16+ Years",
      image: "lisa-wang.jpg",
      skills: ["Operations", "Process Optimization", "Team Leadership"],
      quote: "Streamlining processes to deliver exceptional results.",
      achievement: "Six Sigma Black Belt",
      social: {
        linkedin: "#",
        email: "lisa@constructandco.com",
      },
    },
  ]

  return (
    <div className="about-page">
      <Navbar onNavigate={onNavigate} />

      {notification && <div className="notification">{notification}</div>}

      <section
        className="about-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.1), rgba(10, 10, 10, 0.1)), url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="about-container">
          <div className="about-hero-content">
            <div className="breadcrumb">
              <span onClick={() => onNavigate("home")} style={{ cursor: "pointer" }}>
                Home
              </span>
              <span className="breadcrumb-separator">/</span>
              <span>About Us</span>
            </div>
            <h1>About Our Company</h1>
            <p>Building Excellence, Delivering Dreams</p>
          </div>
        </div>
      </section>

      <section className="company-history">
        <div className="history-container">
          <div className="history-content">
            <div className="history-section">
              <span className="history-label">Our Journey</span>
              <h2>Company History</h2>
              <p className="history-text">
                Founded in 1997, Construct & Co. began as a small family-owned business with a vision to revolutionize
                the construction industry. From our humble beginnings with a team of just 5 dedicated professionals, we
                have grown into one of the region's most trusted construction partners.
              </p>
              <p className="history-text">
                Over the years, we have consistently pushed the boundaries of what's possible in construction, embracing
                new technologies and sustainable practices while never compromising on the craftsmanship and attention
                to detail that built our reputation.
              </p>
              <ul className="history-highlights">
                <li>Started operations in 1997 with focus on residential construction</li>
                <li>Expanded into commercial projects in 2003</li>
                <li>Achieved ISO 9001 certification for quality management in 2008</li>
                <li>Launched green building initiative in 2012</li>
                <li>Reached milestone of 1000 completed projects in 2018</li>
                <li>Established innovation lab for construction technology in 2020</li>
              </ul>
            </div>

            <div className="history-section">
              <span className="history-label">Our Purpose</span>
              <h2>Mission & Values</h2>
              <div className="mission-values">
                <div className="mission-item">
                  <h3>
                    <div className="mission-icon"></div>
                    Excellence in Every Detail
                  </h3>
                  <p>
                    We believe that true excellence lies in the details. Every project, no matter the size, receives our
                    full attention and commitment to delivering superior quality that stands the test of time.
                  </p>
                </div>

                <div className="mission-item">
                  <h3>
                    <div className="mission-icon"></div>
                    Sustainable Innovation
                  </h3>
                  <p>
                    We're committed to building a better future through sustainable construction practices, innovative
                    technologies, and environmentally responsible solutions that benefit both our clients and the
                    planet.
                  </p>
                </div>

                <div className="mission-item">
                  <h3>
                    <div className="mission-icon"></div>
                    Client-Centric Approach
                  </h3>
                  <p>
                    Our success is measured by our clients' satisfaction. We work closely with each client to understand
                    their vision and exceed their expectations through transparent communication and collaborative
                    partnership.
                  </p>
                </div>

                <div className="mission-item">
                  <h3>
                    <div className="mission-icon"></div>
                    Community Impact
                  </h3>
                  <p>
                    We believe in giving back to the communities we serve, supporting local initiatives, creating job
                    opportunities, and contributing to sustainable urban development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-members">
        <div className="team-container">
          <div className="team-header">
            <span className="history-label">Our Team</span>
            <h2>Meet Our Experts</h2>
            <p className="team-subtitle">
              Our dedicated team of professionals brings decades of combined experience and expertise to every project.
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                role={member.role}
                experience={member.experience}
                image={member.image}
                skills={member.skills}
                quote={member.quote}
                achievement={member.achievement}
                social={member.social}
                onContactClick={showNotification}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  )
}

export default About
