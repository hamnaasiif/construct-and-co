"use client"
import { useState } from "react"
import Button from "./Button"
import "./navbar.css"

const Navbar = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigation = (page) => {
    if (onNavigate) {
      onNavigate(page)
    }
    setIsMenuOpen(false)
  }

  const navLinks = [
    { name: "About Company", page: "about" },
    { name: "Our Services", page: "services" },
    { name: "Projects", page: "projects" },
    { name: "Blog", page: "blog" },
    { name: "Contact Us", page: "contact" },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-logo" onClick={() => handleNavigation("home")} style={{ cursor: "pointer" }}>
            <span className="logo-text">Construct & Co.</span>
          </div>

          <div className="navbar-desktop">
            <div className="nav-links-container">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href="#"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation(link.page)
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="navbar-mobile-toggle">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-menu-button">
              <svg className="mobile-menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href="#"
                  className="mobile-nav-link"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation(link.page)
                  }}
                >
                  {link.name}
                </a>
              ))}
              <Button
                variant="secondary"
                size="medium"
                className="mobile-contact-button"
                onClick={() => handleNavigation("contact")}
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
