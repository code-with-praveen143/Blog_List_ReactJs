// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogDetails} = props
  return (
    <div className="blogs-container">
      <ul className="blogs-list">
        {blogDetails.map(eachBlog => (
          <BlogItem key={eachBlog.id} blogInfo={eachBlog} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
