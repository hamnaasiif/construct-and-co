"use client"
import "./footer.css"

const Footer = ({ onNavigate }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Construct & Co</h3>
            </div>
            <p className="footer-description">
              Building dreams with precision, quality, and dedication. Your trusted construction partner for residential
              and commercial projects.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="2"
                    y="9"
                    width="4"
                    height="12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="4"
                    cy="4"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="services"
                  onClick={(e) => {
                    e.preventDefault()
                    onNavigate("services")
                  }}
                >
                  Construction
                </a>
              </li>
              <li>
                <a
                  href="services"
                  onClick={(e) => {
                    e.preventDefault()
                    onNavigate("services")
                  }}
                >
                  Renovation
                </a>
              </li>
              <li>
                <a
                  href="services"
                  onClick={(e) => {
                    e.preventDefault()
                    onNavigate("services")
                  }}
                >
                  Architecture
                </a>
              </li>
              <li>
                <a
                  href="services"
                  onClick={(e) => {
                    e.preventDefault()
                    onNavigate("services")
                  }}
                >
                  Interior Design
                </a>
              </li>
              <li>
                <a
                  href="services"
                  onClick={(e) => {
                    e.preventDefault()
                    onNavigate("services")
                  }}
                >
                  Project Management
                </a>
              </li>
              <li>
                <a
                  href="services"
                  onClick={(e) => {
                    e.preventDefault()
                    onNavigate("services")
                  }}
                >
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="home"
                  onClick={(e) => {
                    e.preventDefault()
                    onNavigate("home")
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="about"
                  onClick={(e) => {
                    e.preventDefault()
                    onNavigate("about")
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="projects"
                  onClick={(e) => {
                    e.preventDefault()
                    onNavigate("projects")
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="contact"
                  onClick={(e) => {
                    e.preventDefault()
                    onNavigate("contact")
                  }}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="quote"
                  onClick={(e) => {
                    e.preventDefault()
                    onNavigate("quote")
                  }}
                >
                  Get Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>1247 Construction Ave, Builder City, TX 75001</span>
              </div>
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>+1 (555) 123-BUILD</span>
              </div>
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="m4 4 16 0c1.1 0 2 .9 2 2l0 12c0 1.1-.9 2-2 2l-16 0c-1.1 0-2-.9-2-2l0-12c0-1.1.9-2 2-2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="22,6 12,13 2,6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>info@constructandco.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Construct & Co. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
