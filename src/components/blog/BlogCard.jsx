"use client"
import "./blogCard.css"

const BlogCard = ({ blog, image, onReadMore }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-image">
        <img src={image || "/placeholder.svg"} alt={blog.title} />
      </div>
      <div className="blog-card-content">
        <span className="blog-card-category">{blog.category}</span>
        <h3 className="blog-card-title">{blog.title}</h3>
        <span className="blog-card-date">{blog.date}</span>
        <p className="blog-card-description">{blog.description}</p>
        <button className="blog-card-read-more" onClick={onReadMore}>
          Read More →
        </button>
      </div>
    </div>
  )
}

export default BlogCard
