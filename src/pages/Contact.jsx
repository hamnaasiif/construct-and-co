"use client"
import { Link } from "react-router-dom"
import Navbar from "../components/common/Navbar"
import ContactForm from "../components/contact/ContactForm"
import Button from "../components/common/Button"
import Footer from "../components/common/Footer"
import bg from "../assets/contact-bg.jpg"
import contact from "../assets/contact1.jpg"
import "./contact.css"

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-navbar-wrapper">
        <Navbar />
      </div>

      <section className="contact-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.1), rgba(10, 10, 10, 0.1)), url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="contact-container">
          <div className="contact-hero-content">
            <div className="breadcrumb">
              <span style={{ cursor: "pointer" }}>
                Home
              </span>
              <span className="breadcrumb-separator">/</span>
              <span>Contact</span>
            </div>
            <h1>Contact Us</h1>
          </div>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-form-section">
              <ContactForm />
            </div>

            <div className="contact-info-section">
              <div className="contact-info-content">
                <p className="contact-description">
                  At Construct & Co, we bring your construction dreams to life with precision, quality, and dedication.
                  From residential homes to commercial buildings, our experienced team delivers exceptional results on
                  time and within budget.
                </p>

                <div className="contact-details">
                  <div className="contact-detail-item">
                    <div className="contact-icon phone-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="contact-detail-text">
                      <h4>Phone Number</h4>
                      <p>+1 (555) 123-BUILD</p>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="contact-icon email-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
                    </div>
                    <div className="contact-detail-text">
                      <h4>Email Address</h4>
                      <p>info@constructandco.com</p>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="contact-icon whatsapp-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="contact-detail-text">
                      <h4>WhatsApp</h4>
                      <p>+1 (555) 123-2845</p>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="contact-icon location-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
                    </div>
                    <div className="contact-detail-text">
                      <h4>Our Office</h4>
                      <p>1247 Construction Ave, Builder City, TX 75001</p>
                    </div>
                  </div>
                </div>

                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4037!2d-96.0169!3d41.2524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87938dc8b50cfced%3A0x46424d4fae37b604!2sOmaha%2C%20NE%2C%20USA!5e0!3m2!1sen!2sus!4v1635959542145!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: "8px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Construct & Co Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-cta"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.1), rgba(10, 10, 10, 0.1)), url(${contact})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="contact-container">
          <div className="cta-content">
            <span className="cta-label">Start Your Project</span>
            <h2>Ready to Build Your Dream? Let's Make It Happen Together</h2>
            <Link to="/contact">
              <Button variant="primary" size="large">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact
