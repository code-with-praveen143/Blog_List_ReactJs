// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogInfo} = props
  const {title, description, publishedDate} = blogInfo
  return (
    <div className="blog-container">
      <div className="card">
        <h1 className="blog-title">{title}</h1>
        <p className="blog-publishedDate">{publishedDate}</p>
      </div>
      <p className="blog-description">{description}</p>
      <hr />
    </div>
  )
}

export default BlogItem
