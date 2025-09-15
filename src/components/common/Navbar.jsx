import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "./Button"
import "./navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navLinks = [
    { name: "About Company", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo" style={{ cursor: "pointer", textDecoration: "none" }}>
            <span className="logo-text">Construct & Co.</span>
          </Link>

          <div className="navbar-desktop">
            <div className="nav-links-container">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="nav-link"
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
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
                <Link
                  key={link.name}
                  to={link.path}
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={closeMenu}>
                <Button
                  variant="secondary"
                  size="medium"
                  className="mobile-contact-button"
                >
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
