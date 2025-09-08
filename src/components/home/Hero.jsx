"use client"
import "./hero.css"
import Button from "../common/Button"
import heroImg from "../../assets/h1.png";

const Hero = ({ onNavigate }) => {
  return (
    <div className="hero-section">
      {/* Background Image */}
      <div
        className="hero-bg"
         style={{ backgroundImage: `url(${heroImg})` }}
      ></div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="container">
          <div className="hero-text-container">
            <h1 className="hero-title">
              We Build
              <br />
              Structures That
              <br />
              Truly Last
            </h1>

            <div className="hero-details">
              <div className="hero-stat">
                <span className="stat-highlight">15+ years in commercial and housing projects</span>
              </div>
              <div className="hero-stat">
                <span className="stat-highlight">Trusted by clients in 10+ major cities</span>
              </div>
            </div>

            <div className="hero-button">
              <Button
                variant="primary"
                size="large"
                onClick={() => onNavigate && onNavigate("about")}
              >
                Learn more →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
