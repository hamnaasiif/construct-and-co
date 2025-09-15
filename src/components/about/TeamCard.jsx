"use client"
import "./teamcard.css"

const TeamCard = ({
  name,
  role,
  experience,
  image,
  skills = [],
  quote = "",
  achievement = "",
  social = {},
  description = "",
  onContactClick,
}) => {
  const handleEmailClick = (e) => {
    e.preventDefault()
    if (onContactClick) {
      onContactClick(`Email sent to ${name} at ${social.email}`)
    }
  }

  const handleLinkedInClick = (e) => {
    e.preventDefault()
    if (onContactClick) {
      onContactClick(`Opening ${name}'s LinkedIn profile`)
    }
  }

  return (
    <div className="team-card">
      {achievement && <div className="achievement-badge">{achievement}</div>}

      <div className="team-card-social">
        {social.linkedin && (
          <button onClick={handleLinkedInClick} className="social-link" aria-label={`${name}'s LinkedIn`}>
            📧
          </button>
        )}
        {social.email && (
          <button onClick={handleEmailClick} className="social-link" aria-label={`Email ${name}`}>
            ✉️
          </button>
        )}
      </div>

      <div className="team-card-content">
        <h3 className="team-card-name">{name}</h3>
        <div className="team-card-role">{role}</div>
        <div className="team-card-experience">{experience} Experience</div>

        {skills.length > 0 && (
          <div className="team-card-skills">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        )}

        {(quote || description) && <div className="team-card-quote">"{quote || description}"</div>}
      </div>
    </div>
  )
}

export default TeamCard
