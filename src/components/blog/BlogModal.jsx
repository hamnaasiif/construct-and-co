"use client"
import "./blogModal.css"

const BlogModal = ({ blog, image, onClose }) => {
  return (
    <div className="blog-modal-overlay" onClick={onClose}>
      <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="blog-modal-close" onClick={onClose}>
          ×
        </button>
        <div className="blog-modal-header">
          <img src={image || "/placeholder.svg"} alt={blog.title} className="blog-modal-image" />
          <div className="blog-modal-info">
            <span className="blog-modal-category">{blog.category}</span>
            <h2 className="blog-modal-title">{blog.title}</h2>
            <span className="blog-modal-date">{blog.date}</span>
          </div>
        </div>
        <div className="blog-modal-body">
          <p className="blog-modal-description">{blog.description}</p>
          <div className="blog-modal-content-text">
            <p>{blog.content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogModal
