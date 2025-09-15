"use client"
import { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/common/Navbar"
import ServiceCard from "../components/services/ServiceCard"
import Footer from "../components/common/Footer"
import "./services.css"
import bg from "../assets/service-bg.jpeg"
import card1 from "../assets/card1.jpg"
import card2 from "../assets/card2.jpg"
import card3 from "../assets/card3.jpg"
import card4 from "../assets/card4.jpg"
import card5 from "../assets/card5.jpg"
import card6 from "../assets/card6.jpg"

const Services = () => {
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      id: 1,
      title: "Construction",
      description:
        "Complete construction solutions from foundation to finishing, delivering quality structures that stand the test of time with precision engineering and expert craftsmanship.",
      image: card1,
      features: ["Residential Construction", "Commercial Buildings", "Infrastructure Projects", "Quality Assurance"],
      detailedInfo:
        "Our construction services encompass every aspect of building development, from initial site preparation to final finishing touches. We specialize in both residential and commercial projects, utilizing cutting-edge technology and time-tested construction methods to ensure structural integrity and longevity. Our experienced team manages complex projects with precision, maintaining strict quality control standards throughout the construction process.",
    },
    {
      id: 2,
      title: "Renovation",
      description:
        "Transform existing spaces with comprehensive renovation services, breathing new life into properties while preserving their character and enhancing functionality.",
      image: card2,
      features: ["Home Renovations", "Office Makeovers", "Historic Restoration", "Energy Efficiency Upgrades"],
      detailedInfo:
        "Our renovation expertise transforms outdated spaces into modern, functional environments while respecting the original character and architectural integrity. We handle everything from minor updates to complete overhauls, specializing in historic preservation, energy-efficient upgrades, and adaptive reuse projects that maximize both aesthetic appeal and practical functionality.",
    },
    {
      id: 3,
      title: "Architecture",
      description:
        "Innovative architectural design services that blend creativity with functionality, creating spaces that inspire and serve their purpose with aesthetic excellence.",
      image: card3,
      features: ["Conceptual Design", "3D Visualization", "Structural Planning", "Sustainable Design"],
      detailedInfo:
        "Our architectural services combine creative vision with technical expertise to design buildings that are both beautiful and functional. We utilize advanced 3D modeling and visualization tools to help clients envision their projects, while incorporating sustainable design principles and innovative structural solutions that meet modern building standards and environmental requirements.",
    },
    {
      id: 4,
      title: "Interior Design",
      description:
        "Sophisticated interior design solutions that create harmonious living and working environments, combining style, comfort, and functionality in every space.",
      image: card4,
      features: ["Space Planning", "Custom Furniture", "Lighting Design", "Material Selection"],
      detailedInfo:
        "Our interior design team creates cohesive, functional spaces that reflect our clients' personalities and lifestyle needs. We provide comprehensive design services including space planning, custom furniture design, lighting schemes, and material selection, ensuring every element works together to create environments that are both aesthetically pleasing and highly functional.",
    },
    {
      id: 5,
      title: "Project Management",
      description:
        "Comprehensive project management services ensuring timely delivery, budget control, and quality standards throughout every phase of your construction project.",
      image: card5,
      features: ["Timeline Management", "Budget Control", "Quality Oversight", "Risk Assessment"],
      detailedInfo:
        "Our project management services ensure seamless coordination of all construction activities, from initial planning through final completion. We employ proven methodologies for timeline management, cost control, and quality assurance, while proactively identifying and mitigating potential risks to keep projects on schedule and within budget.",
    },
    {
      id: 6,
      title: "Consulting",
      description:
        "Expert construction consulting services providing strategic guidance, technical expertise, and industry insights to optimize your project outcomes and investment returns.",
      image: card6,
      features: ["Feasibility Studies", "Cost Analysis", "Technical Advisory", "Regulatory Compliance"],
      detailedInfo:
        "Our consulting services provide clients with expert guidance throughout the construction process. We conduct thorough feasibility studies, detailed cost analyses, and technical assessments to help clients make informed decisions. Our team stays current with building codes, regulations, and industry best practices to ensure compliance and optimal project outcomes.",
    },
  ]

  const openModal = (service) => {
    setSelectedService(service)
  }

  const closeModal = () => {
    setSelectedService(null)
  }

  return (
    <div className="services-page">
      <div className="services-navbar-wrapper">
        <Navbar />
      </div>

      <section
        className="services-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="services-container">
          <div className="services-hero-content">
            <div className="breadcrumb">
              <span style={{ cursor: "pointer" }}>
                Home
              </span>
              <span className="breadcrumb-separator">/</span>
              <span>Our Services</span>
            </div>
            <h1>Our Services</h1>
            <p>Building Excellence, Delivering Dreams</p>
          </div>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="services-container">
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} onLearnMore={() => openModal(service)} />
            ))}
          </div>
        </div>
      </section>

      <section className="process-workflow-section">
        <div className="services-container">
          <div className="process-content">
            <span className="process-label">OUR PROCESS</span>
            <h2>We Follow</h2>
            <p>
              Our streamlined process ensures seamless project delivery from conception to completion, maintaining the
              highest standards of quality and efficiency at every stage.
            </p>

            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h3>Research Project</h3>
                  <p>
                    Thorough site analysis, feasibility studies, and comprehensive planning to establish project
                    requirements and objectives.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h3>Evaluate Plans</h3>
                  <p>
                    Detailed review of architectural plans, structural assessments, and cost analysis to optimize design
                    solutions.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h3>Best Results</h3>
                  <p>
                    Expert execution with quality control, timely delivery, and exceptional craftsmanship that exceeds
                    expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedService && (
        <div className="service-modal-overlay" onClick={closeModal}>
          <div className="service-modal" onClick={(e) => e.stopPropagation()}>
            <div className="service-modal-header">
              <h2>{selectedService.title}</h2>
              <button className="modal-close-button" onClick={closeModal}>
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="service-modal-content">
              <div className="service-modal-image">
                <img src={selectedService.image || "/placeholder.svg"} alt={selectedService.title} />
              </div>
              <div className="service-modal-info">
                <p className="service-modal-description">{selectedService.detailedInfo}</p>
                <div className="service-modal-features">
                  <h3>Key Features:</h3>
                  <ul>
                    {selectedService.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="service-modal-actions">
                  <Link to="/contact">
                    <button className="modal-cta-button">
                      Get Quote
                    </button>
                  </Link>
                  <Link to="/projects">
                    <button className="modal-secondary-button">
                      View Projects
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default Services
