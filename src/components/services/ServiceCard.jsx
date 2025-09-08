"use client"

const ServiceCard = ({ service, onLearnMore }) => {
  return (
    <div className="service-card">
      <div className="service-image-container">
        <img src={service.image || "/placeholder.svg"} alt={service.title} className="service-image" />
        <div className="service-overlay">
          <div className="service-icon">
            <div className="icon-placeholder"></div>
          </div>
        </div>
      </div>

      <div className="service-content">
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>

        <ul className="service-features">
          {service.features.map((feature, index) => (
            <li key={index} className="service-feature">
              {feature}
            </li>
          ))}
        </ul>

        <button className="service-button" onClick={onLearnMore}>
          Learn More
          <svg className="button-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ServiceCard
