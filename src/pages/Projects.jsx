"use client"

import { useState } from "react"
import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"
import Button from "../components/common/Button"
import { projectData, projectCategories, projectStats } from "../data/ProjectData"
import bg from "../assets/projects-bg.jpeg"
import contact from "../assets/contact1.jpg"
import project1 from "../assets/project1.jpeg"
import project2 from "../assets/project2.jpeg"
import project3 from "../assets/project3.jpeg"
import project4 from "../assets/project4.jpeg"
import project5 from "../assets/project5.jpeg"
import project6 from "../assets/project6.jpeg"
import project7 from "../assets/project7.jpeg"
import project8 from "../assets/project8.jpeg"
import "./projects.css"

const Projects = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects")
  const [selectedProject, setSelectedProject] = useState(null)

  const imageMap = {
    "project1.jpeg": project1,
    "project2.jpeg": project2,
    "project3.jpeg": project3,
    "project4.jpeg": project4,
    "project5.jpeg": project5,
    "project6.jpeg": project6,
    "project7.jpeg": project7,
    "project8.jpeg": project8,
  }

  const filteredProjects =
    selectedCategory === "All Projects"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory)

  const featuredProjects = projectData.filter((project) => project.featured)

  const openProjectModal = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = "hidden"
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = "unset"
  }

  return (
    <div className="projects-page">
      <div className="projects-navbar-wrapper">
        <Navbar onNavigate={onNavigate} />
      </div>

      {/* Hero Section */}
      <section
        className="projects-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.1), rgba(10, 10, 10, 0.1)), url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="projects-container">
          <div className="projects-hero-content">
            <div className="breadcrumb">
              <span onClick={() => onNavigate("home")} style={{ cursor: "pointer" }}>
                Home
              </span>
              <span className="breadcrumb-separator">/</span>
              <span>Projects</span>
            </div>
            <h1>Our Projects</h1>
            <p className="hero-subtitle">Building Excellence, Delivering Dreams</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="projects-stats">
        <div className="projects-container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{projectStats.totalProjects}+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{projectStats.yearsExperience}+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{projectStats.satisfiedClients}%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{projectStats.teamMembers}+</div>
              <div className="stat-label">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects">
        <div className="projects-container">
          <div className="section-header">
            <span className="section-label">Showcase</span>
            <h2>Featured Projects</h2>
            <p className="section-description">
              Discover our most prestigious and innovative construction projects that showcase our expertise and
              commitment to excellence.
            </p>
          </div>

          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <div key={project.id} className="featured-project-card" onClick={() => openProjectModal(project)}>
                <div className="project-image">
                  <img src={imageMap[project.image] || "/placeholder.svg"} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-category">{project.category}</div>
                    <div className="project-type">{project.type}</div>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-location">{project.location}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-details">
                    <span className="project-budget">{project.budget}</span>
                    <span className="project-area">{project.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className="all-projects">
        <div className="projects-container">
          <div className="section-header">
            <span className="section-label">Portfolio</span>
            <h2>All Projects</h2>
            <p className="section-description">
              Explore our comprehensive portfolio of construction projects across various sectors and scales.
            </p>
          </div>

          {/* Category Filter */}
          <div className="category-filter">
            {projectCategories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card" onClick={() => openProjectModal(project)}>
                <div className="project-image">
                  <img src={imageMap[project.image] || "/placeholder.svg"} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-status">{project.status}</div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-meta">
                    <span className="project-category">{project.category}</span>
                    <span className="project-date">{project.completionDate}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-location">{project.location}</p>
                  <div className="project-stats">
                    <div className="project-stat">
                      <span className="stat-label">Budget</span>
                      <span className="stat-value">{project.budget}</span>
                    </div>
                    <div className="project-stat">
                      <span className="stat-label">Area</span>
                      <span className="stat-value">{project.area}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeProjectModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProjectModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-image">
                  <img src={imageMap[selectedProject.image] || "/placeholder.svg"} alt={selectedProject.title} />
                </div>
                <div className="modal-info">
                  <div className="project-badges">
                    <span className="badge category">{selectedProject.category}</span>
                    <span className="badge type">{selectedProject.type}</span>
                    <span className="badge status">{selectedProject.status}</span>
                  </div>
                  <h2>{selectedProject.title}</h2>
                  <p className="modal-location">{selectedProject.location}</p>
                  <p className="modal-description">{selectedProject.description}</p>
                </div>
              </div>

              <div className="modal-body">
                <div className="project-overview">
                  <h3>Project Overview</h3>
                  <div className="overview-grid">
                    <div className="overview-item">
                      <span className="overview-label">Client</span>
                      <span className="overview-value">{selectedProject.client}</span>
                    </div>
                    <div className="overview-item">
                      <span className="overview-label">Architect</span>
                      <span className="overview-value">{selectedProject.architect}</span>
                    </div>
                    <div className="overview-item">
                      <span className="overview-label">Duration</span>
                      <span className="overview-value">{selectedProject.duration}</span>
                    </div>
                    <div className="overview-item">
                      <span className="overview-label">Budget</span>
                      <span className="overview-value">{selectedProject.budget}</span>
                    </div>
                  </div>
                </div>

                <div className="project-features">
                  <h3>Key Features</h3>
                  <ul className="features-list">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-challenges">
                  <div className="challenges-solutions">
                    <div className="challenges">
                      <h3>Challenges</h3>
                      <ul>
                        {selectedProject.challenges.map((challenge, index) => (
                          <li key={index}>{challenge}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="solutions">
                      <h3>Solutions</h3>
                      <ul>
                        {selectedProject.solutions.map((solution, index) => (
                          <li key={index}>{solution}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {selectedProject.testimonial && (
                  <div className="project-testimonial">
                    <h3>Client Testimonial</h3>
                    <blockquote>
                      <p>"{selectedProject.testimonial.text}"</p>
                      <footer>
                        <strong>{selectedProject.testimonial.author}</strong>
                        <span>{selectedProject.testimonial.position}</span>
                      </footer>
                    </blockquote>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section
        className="projects-cta"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.1), rgba(10, 10, 10, 0.1)), url(${contact})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="projects-container">
          <div className="cta-content">
            <span className="cta-label">Ready to Start?</span>
            <h2>Let's Build Your Next Project Together</h2>
            <p className="cta-description">
              From concept to completion, we deliver exceptional construction solutions tailored to your vision and
              requirements.
            </p>
            <div className="cta-buttons">
              <Button variant="primary" size="large" onClick={() => onNavigate("contact")}>
                Start Your Project
              </Button>
              <Button variant="secondary" size="large">
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  )
}

export default Projects
