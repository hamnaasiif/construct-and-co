"use client"
import { useState } from "react"
import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"
import BlogCard from "../components/blog/BlogCard"
import BlogModal from "../components/blog/BlogModal"
import { blogData } from "../data/MockData.js"
import "./blog.css"
import bg from "../assets/blog-bg.jpeg"
import contact from "../assets/contact1.jpg"
import img1 from "../assets/blog1.jpeg"
import img2 from "../assets/blog2.jpeg"
import img3 from "../assets/blog3.jpeg"
import img4 from "../assets/blog4.jpeg"
import img5 from "../assets/blog5.jpeg"
import img6 from "../assets/blog6.jpeg"
import img7 from "../assets/blog7.jpeg" 

const Blog = ({ onNavigate }) => {
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const imageMap = {
    "blog1.jpeg": img1,
    "blog2.jpeg": img2,
    "blog3.jpeg": img3,
    "blog4.jpeg": img4,
    "blog5.jpeg": img5,
    "blog6.jpeg": img6,
    "blog7.jpeg": img7,
  }

  const handleReadMore = (blog) => {
    setSelectedBlog(blog)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedBlog(null)
  }

  const featuredBlog = blogData.find((blog) => blog.featured)
  const regularBlogs = blogData.filter((blog) => !blog.featured)

  return (
    <div className="blog-page">
      <div className="blog-navbar-wrapper">
        <Navbar onNavigate={onNavigate} />
      </div>

      <section
        className="blog-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.1), rgba(10, 10, 10, 0.1)), url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="blog-container">
          <div className="blog-hero-content">
            <div className="breadcrumb">
              <span onClick={() => onNavigate("home")} style={{ cursor: "pointer" }}>
                Home
              </span>
              <span className="breadcrumb-separator">/</span>
              <span>Blog</span>
            </div>
            <h1>Our Insightful Blog</h1>
            <p>
              Stay updated with the latest trends, insights, and innovations in construction, architecture, and design.
              Our expert team shares valuable knowledge to help you make informed decisions for your next project.
            </p>
          </div>
        </div>
      </section>

      <section className="featured-blog-section">
        <div className="blog-container">
          <div className="featured-blog-layout">
            {featuredBlog && (
              <div className="featured-blog-card">
                <div className="featured-blog-image">
                  <img src={imageMap[featuredBlog.image] || "/placeholder.svg"} alt={featuredBlog.title} />
                  <div className="featured-blog-overlay">
                    <div className="featured-blog-content">
                      <span className="featured-blog-category">{featuredBlog.category}</span>
                      <h2>{featuredBlog.title}</h2>
                      <span className="featured-blog-date">{featuredBlog.date}</span>
                      <p>{featuredBlog.description}</p>
                      <button className="read-more-btn" onClick={() => handleReadMore(featuredBlog)}>
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="sidebar-blogs">
              {regularBlogs.slice(0, 3).map((blog) => (
                <div key={blog.id} className="sidebar-blog-card">
                  <div className="sidebar-blog-image">
                    <img src={imageMap[blog.image] || "/placeholder.svg"} alt={blog.title} />
                  </div>
                  <div className="sidebar-blog-content">
                    <span className="sidebar-blog-category">{blog.category}</span>
                    <h3>{blog.title}</h3>
                    <span className="sidebar-blog-date">{blog.date}</span>
                    <button className="sidebar-read-more" onClick={() => handleReadMore(blog)}>
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="latest-articles-section">
        <div className="blog-container">
          <div className="section-header">
            <h2>Explore Our Latest Articles</h2>
            <p>
              Discover comprehensive insights about construction techniques, project management, and industry best
              practices from our experienced professionals.
            </p>
          </div>

          <div className="articles-grid">
            {regularBlogs.slice(3).map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                image={imageMap[blog.image]}
                onReadMore={() => handleReadMore(blog)}
              />
            ))}
          </div>

          <div className="view-all-container">
            <button className="view-all-btn">View all articles</button>
          </div>
        </div>
      </section>

      <section
        className="blog-cta"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.1), rgba(10, 10, 10, 0.1)), url(${contact})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="blog-container">
          <div className="cta-content">
            <span className="cta-label">Stay Informed</span>
            <h2>Ready to Start Your Next Construction Project?</h2>
            <button className="cta-button" onClick={() => onNavigate("contact")}>
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />

      {isModalOpen && selectedBlog && (
        <BlogModal blog={selectedBlog} image={imageMap[selectedBlog.image]} onClose={closeModal} />
      )}
    </div>
  )
}

export default Blog
